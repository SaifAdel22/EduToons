'use client'
import { SignInButton, SignOutButton, SignUpButton, SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";
import React from 'react';
import Link from 'next/link';
const Header = () => {

  return (
    <header className="flex justify-between w-full absolute text-white z-50 py-10 px-32   ">

      <div className="container mx-auto px-4 flex justify-between">


        <Link href='/' className="text-6xl font-bold gluten-custom ">EduToons</Link>
        <div className="flex justify-between items-center">
          {/* <SignedOut>
            <SignInButton className="px-5" mode="modal" />
            <SignUpButton className="px-5" mode="modal" redirectUrl="/role" /> */}
          {/* </SignedOut> */}
          {/* <SignedIn>

            <SignOutButton className="px-5" mode="modal" />
          </SignedIn> */}

          <UserButton ></UserButton>
        </div>

      </div>
    </header>
  );
};

export default Header;
