"use client";

import { useEffect } from "react";
import { Button, Card, CardBody } from "@heroui/react";

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
      <CardBody className="flex items-center justify-center text-center m-4">
        <h1 className="text-4xl font-bold p-6">Something went wrong!</h1>
        <p className="mt-2 text-md p-6">{error.message}</p>
        <Button color="primary" onPress={reset} className="mt-4 w-28">
          Try Again
        </Button>
      </CardBody>
    </Card>
  );
}
