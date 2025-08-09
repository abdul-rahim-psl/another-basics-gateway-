import { NextRequest, NextResponse } from "next/server";

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
