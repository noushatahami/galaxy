import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 gap-6">
      <h1 className="text-3xl font-bold">Log in</h1>

      <form className="flex flex-col gap-4 w-64">
        <input
          type="email"
          placeholder="Email"
          className="border px-3 py-2 rounded text-black"
        />
        <input
          type="password"
          placeholder="Password"
          className="border px-3 py-2 rounded text-black"
        />
        <button
          type="submit"
          className="bg-black text-white py-2 rounded hover:bg-gray-800"
        >
          Log in
        </button>
      </form>

      {/* back button */}
      <Link
        href="/"
        className="mt-4 text-sm text-gray-400 hover:underline"
      >
        ← Back to Home
      </Link>
    </main>
  );
}
