import Link from "next/link";
import motion from "framer-motion";

export default function NotFound() {
  return (
    <main className="realtive flex flex-col items-center justify-center h-screen mx-auto p-8 golden">
      <div
        aria-hidden="true"
        className="px:5 absolute inset-x-0 top-3 z-0 h-full w-full transform-gpu overflow-hidden blur-3xl md:right-20 md:h-auto md:w-auto md:px-36"
      >
        <div
          className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#d789ca] to-[#C9A9E9] opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <h1 className="text-8xl font-bold mb-8">Error 404 😥</h1>
      <p className="text-2xl font-mono mb-10">Oops! This page was not found</p>
      <Link
        href="/"
        className="mt-4 px-6 py-2 text-white bg-primary rounded-full"
      >
        Return Home
      </Link>
    </main>
  );
}
