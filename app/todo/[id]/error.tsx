"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <p>Oops ! Something went wrong !</p>

      <Link href="/">Back</Link>
    </div>
  );
}
