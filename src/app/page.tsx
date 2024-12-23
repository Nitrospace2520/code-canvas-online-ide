import { SignOutButton, SignUpButton } from "@clerk/nextjs";
import React from "react";

export default function Home() {
  return (
    <div>
      <SignUpButton />
      <SignOutButton />
    </div>
  );
}
