import {
  SignedOut,
  SignedIn,
  SignUpButton,
  SignOutButton,
  UserButton,
} from "@clerk/nextjs";
import React from "react";

export default function Home() {
  return (
    <div>
      <SignedOut>
        <SignUpButton>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Sign up
          </button>
        </SignUpButton>
      </SignedOut>

      <UserButton />

      <SignedIn>
        <SignOutButton>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Sign out
          </button>
        </SignOutButton>
      </SignedIn>
    </div>
  );
}
