"use client"

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
    <div>Hello, world!</div>
    <Button onClick={() => alert("Hello world!")}>Click ME!</Button>
    </>
  );
}
