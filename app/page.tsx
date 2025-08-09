"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [receivedData, setReceivedData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/receive");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setReceivedData(result.data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
    // Set up polling to refresh data every 5 seconds
    const intervalId = setInterval(fetchData, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold underline">Welcome to My App</h1>
      {receivedData.length > 0 ? (
        receivedData.map((data, index) => (
          <div key={index} className="mt-4 p-4 border rounded">
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        ))
      ) : (
        <p className="mt-4 text-gray-500">No messages received yet</p>
      )}
    </main>
  );
}
