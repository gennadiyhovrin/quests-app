import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1 className="text-9xl font-bold mb-4">Not Found</h1>

      <Link className="bg-orange-500 text-white font-bold py-2 px-8 rounded-3xl uppercase" href="/">
        Return Home
      </Link>
    </div>
  );
}
