"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();

  // form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [linkedin, setLinkedin] = useState("");
  const [twitter, setTwitter] = useState("");
  const [scholar, setScholar] = useState("");
  const [showSocials, setShowSocials] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // basic validation
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const pwOk = pw.trim().length >= 8;
  const nameOk = name.trim().length > 1;
  const canSubmit = nameOk && emailOk && pwOk && !submitting;

  function onBrowse(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (f && f.type === "application/pdf") setFile(f);
  }

  function onDrop(e: React.DragEvent<HTMLLabelElement>) {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(false);
    const f = e.dataTransfer.files?.[0];
    if (f && f.type === "application/pdf") setFile(f);
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      router.push("/");
    }, 800);
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
            Create Your Account
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            Join the Galaxy dashboard to manage your profile, grants, and more.
          </p>
        </div>

        {/* Card */}
        <form
          onSubmit={onSubmit}
          className="mt-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md
                     shadow-[0_8px_30px_rgba(0,0,0,0.35)] p-6 sm:p-8 space-y-6"
        >
          {/* Name / Email / Password */}
          <div className="grid gap-4">
            <div>
              <label htmlFor="name" className="block text-sm mb-1">
                Full Name
              </label>
              <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Doe"
                className="w-full rounded-lg border border-[#333] bg-[#1c1c1c] text-white px-3 py-2 outline-none focus:border-[#565656]"
                autoComplete="name"
              />
              {!nameOk && (
                <p className="mt-1 text-xs text-red-300">
                  Enter your full name (2+ characters).
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jane@university.edu"
                className="w-full rounded-lg border border-[#333] bg-[#1c1c1c] text-white px-3 py-2 outline-none focus:border-[#565656]"
                autoComplete="email"
              />
              {!emailOk && email.length > 0 && (
                <p className="mt-1 text-xs text-red-300">
                  That doesn’t look like a valid email.
                </p>
              )}
            </div>

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
                  autoComplete="new-password"
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
          </div>

          {/* Toggle socials */}
          <button
            type="button"
            onClick={() => setShowSocials((s) => !s)}
            className="w-full text-left text-sm font-semibold
                       bg-white/5 hover:bg-white/10 border border-white/10
                       rounded-lg px-4 py-3 transition"
          >
            {showSocials ? "- Hide" : "+ Add"} Social Profiles (optional)
          </button>

          {/* Socials section */}
          {showSocials && (
            <div className="grid gap-4 -mt-2">
              <div>
                <label htmlFor="linkedin" className="block text-sm mb-1">
                  LinkedIn URL
                </label>
                <input
                  id="linkedin"
                  value={linkedin}
                  onChange={(e) => setLinkedin(e.target.value)}
                  placeholder="https://www.linkedin.com/in/…"
                  className="w-full rounded-lg border border-[#333] bg-[#1c1c1c] text-white px-3 py-2 outline-none focus:border-[#565656]"
                />
              </div>
              <div>
                <label htmlFor="twitter" className="block text-sm mb-1">
                  Twitter URL
                </label>
                <input
                  id="twitter"
                  value={twitter}
                  onChange={(e) => setTwitter(e.target.value)}
                  placeholder="https://twitter.com/…"
                  className="w-full rounded-lg border border-[#333] bg-[#1c1c1c] text-white px-3 py-2 outline-none focus:border-[#565656]"
                />
              </div>
              <div>
                <label htmlFor="scholar" className="block text-sm mb-1">
                  Google Scholar URL
                </label>
                <input
                  id="scholar"
                  value={scholar}
                  onChange={(e) => setScholar(e.target.value)}
                  placeholder="https://scholar.google.com/citations?user=…"
                  className="w-full rounded-lg border border-[#333] bg-[#1c1c1c] text-white px-3 py-2 outline-none focus:border-[#565656]"
                />
              </div>
            </div>
          )}

          {/* Drag & drop CV */}
          <div>
            <label className="block text-sm mb-1">
              Upload Your CV (PDF only)
            </label>

            <label
              onDragOver={(e) => {
                e.preventDefault();
                setDragOver(true);
              }}
              onDragLeave={() => setDragOver(false)}
              onDrop={onDrop}
              className={`flex items-center justify-between gap-4 rounded-xl px-4 py-4 border transition cursor-pointer ${
                dragOver ? "border-white/60 bg-white/10" : "border-white/15 bg-white/5"
              }`}
            >
              <div className="text-sm">
                <div className="font-medium">
                  {file ? file.name : "Drag and drop file here"}
                </div>
                <div className="text-gray-400">
                  {file ? `${(file.size / (1024 * 1024)).toFixed(1)} MB` : "Limit 200MB • PDF"}
                </div>
              </div>

              <span className="inline-flex items-center rounded-md border border-white/15 bg-white/10 px-3 py-2 text-sm hover:bg-white/20">
                Browse files
              </span>

              <input
                type="file"
                accept="application/pdf"
                onChange={onBrowse}
                className="hidden"
              />
            </label>
          </div>

          {/* Submit + links */}
          <div className="flex flex-col items-center gap-3">
            <button
              disabled={!canSubmit}
              type="submit"
              className="inline-flex items-center justify-center w-full sm:w-auto rounded-lg bg-white text-black font-semibold px-6 py-3 hover:bg-gray-200 disabled:opacity-40"
            >
              {submitting ? "Creating..." : "Sign Up"}
            </button>

            <p className="text-center text-sm text-gray-400">
              Already have an account?{" "}
              <Link href="/login" className="underline hover:text-gray-200">
                Log in
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
