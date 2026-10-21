"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function SignUpPage() {
  const [done, setDone] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setDone(true);
  };

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-4 py-12">
      <h1 className="mb-2 text-3xl font-bold tracking-tight">Sign up</h1>
      <p className="mb-8 text-sm text-muted-foreground">
        Create your account to access live batches, mocks, and recorded courses.
      </p>
      {done ? (
        <div className="rounded-xl border border-primary/30 bg-primary/10 p-6 text-sm">
          Demo account created. Wire this form to a real backend when you&apos;re ready.
        </div>
      ) : (
        <form onSubmit={onSubmit} className="space-y-4">
          <label className="block text-sm">
            <span className="mb-1.5 block font-medium">Full name</span>
            <input
              required
              className="h-11 w-full rounded-lg border border-input bg-card px-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              placeholder="Your name"
            />
          </label>
          <label className="block text-sm">
            <span className="mb-1.5 block font-medium">Phone</span>
            <input
              required
              type="tel"
              className="h-11 w-full rounded-lg border border-input bg-card px-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              placeholder="10-digit mobile"
            />
          </label>
          <label className="block text-sm">
            <span className="mb-1.5 block font-medium">Email</span>
            <input
              required
              type="email"
              className="h-11 w-full rounded-lg border border-input bg-card px-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              placeholder="you@example.com"
            />
          </label>
          <label className="block text-sm">
            <span className="mb-1.5 block font-medium">Password</span>
            <input
              required
              type="password"
              className="h-11 w-full rounded-lg border border-input bg-card px-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              placeholder="Create a password"
            />
          </label>
          <button
            type="submit"
            className="w-full rounded-lg bg-primary py-3 text-sm font-semibold text-primary-foreground"
          >
            Create account
          </button>
        </form>
      )}
      <p className="mt-6 text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link href="/auth/signin" className="font-medium text-primary hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}
