import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 gap-6">
      <Image src="/images/logo.png" alt="Logo" width={72} height={72} />
      <h1 className="text-3xl font-bold text-center">
        Welcome to Galaxy Dashboard
      </h1>
      <p className="text-center text-gray-600 max-w-md">
        Please create an account or sign in to continue.
      </p>

      <div className="flex gap-4">
        <Link
          href="/signup"
          className="rounded-lg border border-gray-300 px-6 py-3 bg-transparent text-white hover:bg-white hover:text-black"
        >
          Sign up
        </Link>

        <Link
          href="/login"
          className="rounded-lg border border-gray-300 px-6 py-3 bg-transparent text-white hover:bg-white hover:text-black"
        >
          Log in
        </Link>



      </div>
    </main>
  );
}
