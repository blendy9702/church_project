"use client";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();

  // Check if the router is ready before accessing the query
  if (!router.isReady) {
    return <div>Loading...</div>; // or any loading state
  }

  const { id } = router.query;

  return <div>Page ID: {id}</div>;
}
