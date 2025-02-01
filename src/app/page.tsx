"use client";

import Link from "next/link";
export default function Home() {
  return (
    <div className="grid grid-cols-[1fr_auto_1fr] px-4 sm:px-6 md:px-8 py-4 items-center">
      {/* Left Navigation */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-4">
          <Link className="text-md font-bold" href="/">
            ABOUT
          </Link>
          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
          <Link className="text-md font-bold" href="/">
            PROJECTS
          </Link>
        </div>
        <div className="h-px bg-border flex-grow ml-4" />
      </div>

      {/* Center Logo */}
      <div className="px-8">
        <h1 className="font-fairyTail text-2xl">
          MOSS<span className="text-primary text-3xl">.</span>
        </h1>
      </div>

      {/* Right Navigation */}
      <div className="flex items-center justify-end">
        <div className="h-px bg-border flex-grow mr-4" />
        <div className="flex items-center">
          <Link className="text-md font-bold" href="/">
            CONTACT
          </Link>
          <div className="ml-4 text-primary">
            <svg
              width="15"
              height="15"
              viewBox="0 0 37 37"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.5 37C18.463 26.7953 10.1945 18.5343 0 18.5343C10.2173 18.5343 18.5 10.2361 18.5 0C18.5368 10.2047 26.8055 18.4657 37 18.4657C26.7826 18.4657 18.5 26.7639 18.5 37Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
