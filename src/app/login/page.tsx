"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [remember, setRemember] = useState(true);

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const pwOk = pw.trim().length >= 8;
  const canSubmit = emailOk && pwOk && !submitting;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      router.push("/"); 
    }, 700);
  }

  return (
    <div className="min-h-screen bg-[#0f1012] text-white flex items-start justify-center">
          <main className="w-full max-w-2xl px-6 pb-16">
            {/* Header */}
            <div className="text-center pt-10">
              <Image
                src="/images/logo.png" 
                alt="Logo"
                width={88}
                height={88}
                className="mx-auto"
              />
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight">
                Log in
              </h1>
              <p className="text-sm text-gray-400 mt-1">
                Welcome back - Enter your credentials to continue.
              </p>
            </div>

        {/* Card */}
        <form
          onSubmit={onSubmit}
          className="mt-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md
                     shadow-[0_8px_30px_rgba(0,0,0,0.35)] p-6 space-y-6"
        >
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="w-full rounded-lg border border-[#333] bg-[#1c1c1c] text-white px-3 py-2 outline-none focus:border-[#565656]"
              autoComplete="email"
            />
            {!emailOk && email.length > 0 && (
              <p className="mt-1 text-xs text-red-300">
                That doesn’t look like a valid email.
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label htmlFor="pw" className="block text-sm mb-1">
              Password
            </label>
            <div className="relative">
              <input
                id="pw"
                type={showPw ? "text" : "password"}
                value={pw}
                onChange={(e) => setPw(e.target.value)}
                placeholder="Minimum 8 characters"
                className="w-full rounded-lg border border-[#333] bg-[#1c1c1c] text-white px-3 py-2 pr-16 outline-none focus:border-[#565656]"
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={() => setShowPw((s) => !s)}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md
                           px-2 py-1 text-xs bg-white/10 hover:bg-white/20 border border-white/10"
                aria-label={showPw ? "Hide password" : "Show password"}
              >
                {showPw ? "Hide" : "Show"}
              </button>
            </div>
            {!pwOk && pw.length > 0 && (
              <p className="mt-1 text-xs text-red-300">
                Password must be at least 8 characters.
              </p>
            )}
          </div>

          {/* Options */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 select-none">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="accent-white"
              />
              Remember me
            </label>
            <Link
              href="#"
              className="text-gray-300 hover:text-white hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Submit + Links */}
          <div className="flex flex-col items-center gap-3">
            <button
              disabled={!canSubmit}
              type="submit"
              className="inline-flex items-center justify-center w-full rounded-lg bg-white text-black font-semibold px-6 py-3
                         hover:bg-gray-200 disabled:opacity-40"
            >
              {submitting ? "Logging in..." : "Log in"}
            </button>

            <p className="text-center text-sm text-gray-400">
              No account?{" "}
              <Link href="/signup" className="underline hover:text-gray-200">
                Sign up
              </Link>
            </p>

            <Link href="/" className="text-xs text-gray-500 hover:underline">
              ← Back to Home
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
}
