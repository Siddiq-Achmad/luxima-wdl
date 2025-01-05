"use client";

import { useEffect } from "react";
import { Button, Card } from "@nextui-org/react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    /* eslint-disable no-console */
    console.error(error);
  }, [error]);

  return (
    <Card className="flex flex-col items-center justify-center h-screen">
      <p className="font-bold text-lg">Something went wrong!</p>
      <p className="mt-2 text-md">{error.message}</p>
      <Button color="primary" onPress={reset} className="mt-4">
        Try Again
      </Button>
    </Card>
  );
}
