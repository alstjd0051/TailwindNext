"use client";
import Link from "next/link";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="p-5">
      <div className="flex items-center justify-between">
        <h1 className="font-Knewave font-medium text-lg">Tyler</h1>
        <div className="flex">
          <Link href="/test">
            <button>Test</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
