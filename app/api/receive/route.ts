import { NextRequest, NextResponse } from "next/server";

// Configure this route to be dynamic (not statically exported)
/*
The error was occurring because your Next.js application was trying to statically export an API route that requires server-side functionality. 
API routes with dynamic behavior (like storing data in memory, handling POST requests) cannot be statically exported.
*/

export const dynamic = "force-dynamic";

// In-memory array to store received data
const receivedData: string[] = [];

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Add timestamp to the received data
    const dataWithTimestamp = {
      ...data,
      receivedAt: new Date().toISOString().slice(11, 19), // HH:MM:SS (UTC)
    };

    // Push the data to our array
    receivedData.push(dataWithTimestamp);

    console.log("Received data:", dataWithTimestamp);
    console.log("Current array length:", receivedData.length);

    return NextResponse.json({
      success: true,
      message: "Data received successfully",
      arrayLength: receivedData.length,
    });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { success: false, message: "Error processing request" },
      { status: 400 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    data: receivedData,
    count: receivedData.length,
  });
}
