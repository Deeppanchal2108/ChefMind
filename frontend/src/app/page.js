import React from 'react';
import { SignOutButton } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server'
async function page() {
  const user = await currentUser();
  return (
    <div>
      {user && (
        <SignOutButton>
          <button>Logout</button>
        </SignOutButton>
      )}
    </div>
  );
}

export default page;
