import React from 'react';
import { SignOutButton } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server'
async function page() {
  const user = await currentUser();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold">Welcome to the Clerk Next.js Quickstart!</h1>
      {user && (
        <SignOutButton>
          <button>Logout</button>
        </SignOutButton>
      )}
    </div>
  );
}

export default page;
