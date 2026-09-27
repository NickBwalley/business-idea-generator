"use client";

import { useState } from "react";
import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Home() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Navigation */}
        <nav className="flex justify-between items-center mb-12">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            IdeaGen Pro
          </h1>
          <div>
            <SignedOut>
              <SignInButton mode="modal">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <div className="flex items-center gap-4">
                <Link
                  href="/product"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
                >
                  Go to App
                </Link>
                <UserButton showName={true} />
              </div>
            </SignedIn>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="text-center py-2">
          <h2 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            Generate Your Next
            <br />
            Big Business Idea
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Harness the power of AI to discover innovative business
            opportunities tailored for the AI agent economy
          </p>

          {/* Pricing Preview */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl p-6 max-w-sm mx-auto mb-8">
            <h3 className="text-2xl font-bold mb-4">Premium Subscription</h3>
            <div className="inline-flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1 mb-4">
              <button
                type="button"
                onClick={() => setBilling("monthly")}
                aria-pressed={billing === "monthly"}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  billing === "monthly"
                    ? "bg-white dark:bg-gray-900 text-blue-600 shadow"
                    : "text-gray-600 dark:text-gray-300"
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setBilling("annual")}
                aria-pressed={billing === "annual"}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  billing === "annual"
                    ? "bg-white dark:bg-gray-900 text-blue-600 shadow"
                    : "text-gray-600 dark:text-gray-300"
                }`}
              >
                Annual
              </button>
            </div>
            <p className="text-4xl font-bold text-blue-600 mb-1">
              ${billing === "monthly" ? 100 : 90}
              <span className="text-lg text-gray-600">/month</span>
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              {billing === "monthly"
                ? "Billed monthly"
                : "Billed annually at $1,080/year (save $120)"}
            </p>
            <ul className="text-left text-gray-600 dark:text-gray-400 mb-6">
              <li className="mb-2">✓ Unlimited business idea generation</li>
              <li className="mb-2">✓ Latest OpenAI models</li>
              <li className="mb-2">
                ✓ Real validation from real user feedback
              </li>
              <li className="mb-2">✓ Priority support</li>
            </ul>
          </div>

          <SignedOut>
            <SignInButton mode="modal">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all transform hover:scale-105">
                Start Your Free Trial
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <Link href="/product">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all transform hover:scale-105">
                Access Premium Features
              </button>
            </Link>
          </SignedIn>
        </div>
      </div>
    </main>
  );
}
