import { NextResponse } from "next/server";

// Rate limiting in-memory store for demonstrations / production baseline
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

function sanitizeInput(str: string): string {
  return str
    .replace(/[<>]/g, "") // basic tag stripping
    .trim();
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "127.0.0.1";
    const now = Date.now();

    // Rate Limiting Check
    const rateData = rateLimitMap.get(ip) || { count: 0, lastReset: now };
    if (now - rateData.lastReset > RATE_LIMIT_WINDOW_MS) {
      rateData.count = 1;
      rateData.lastReset = now;
    } else {
      rateData.count += 1;
    }
    rateLimitMap.set(ip, rateData);

    if (rateData.count > MAX_REQUESTS_PER_WINDOW) {
      return NextResponse.json(
        {
          error:
            "Too many consultation requests from this connection. Please wait a minute or connect directly via WhatsApp.",
        },
        { status: 429 }
      );
    }

    const body = await request.json();
    const {
      fullName,
      email,
      phone,
      company,
      serviceInterest,
      budgetRange,
      projectDescription,
      contactMethod,
      consent,
    } = body;

    // Strict Server-Side Validation
    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
      return NextResponse.json(
        { error: "Please provide a valid full name." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid business email address." },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== "string" || phone.trim().length < 8) {
      return NextResponse.json(
        { error: "Please provide a valid contact phone number with country code." },
        { status: 400 }
      );
    }

    if (
      !projectDescription ||
      typeof projectDescription !== "string" ||
      projectDescription.trim().length < 10
    ) {
      return NextResponse.json(
        {
          error:
            "Please provide a project description of at least 10 characters so our engineering team can prepare.",
        },
        { status: 400 }
      );
    }

    if (!consent) {
      return NextResponse.json(
        { error: "You must consent to privacy terms to submit an inquiry." },
        { status: 400 }
      );
    }

    // Sanitized submission payload
    const sanitizedSubmission = {
      fullName: sanitizeInput(fullName),
      email: sanitizeInput(email),
      phone: sanitizeInput(phone),
      company: company ? sanitizeInput(company) : "Not Specified",
      serviceInterest: serviceInterest ? sanitizeInput(serviceInterest) : "General Consultation",
      budgetRange: budgetRange ? sanitizeInput(budgetRange) : "Not Specified",
      projectDescription: sanitizeInput(projectDescription),
      contactMethod: contactMethod ? sanitizeInput(contactMethod) : "Email",
      submittedAt: new Date().toISOString(),
      ipHash: Buffer.from(ip).toString("base64").slice(0, 10),
    };

    // Log internally for operations
    console.log(
      "[Z INTECH Enterprise Inquiry Received]:",
      JSON.stringify(sanitizedSubmission, null, 2)
    );

    // Return structured success response
    return NextResponse.json(
      {
        success: true,
        message:
          "Your inquiry has been received by the Z INTECH engineering team. We will review your requirements and reach out within 1 business day.",
        referenceId: `ZIN-${Date.now().toString().slice(-6)}`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API Handler Error:", error);
    return NextResponse.json(
      {
        error:
          "An unexpected server error occurred while processing your request. Please try again or reach out on WhatsApp directly.",
      },
      { status: 500 }
    );
  }
}
