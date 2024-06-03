import Link from "next/link";

export default function UserNotFoundPage() {
  return (
    <div className="text-[#ffde00] max-w-[768px] mx-auto mt-10 px-5">
      <h1 className="text-lg border-b pb-1 mb-1">Error!</h1>
      <p>Quiz is not found!</p>
      <p className="mt-4">
        <Link href="/" className="text-white hover:text-white/85">
          Go back
        </Link>
      </p>
    </div>
  );
}
