import Link from "next/link";

export const Header = () => {
  return (
    <header className="p-4">
      <Link href="/">
        <h1 className="w-min text-2xl font-extrabold text-transparent drop-shadow-w bg-clip-text bg-gradient-to-r from-blue-300 to-pink-400">
          ToutDoux
        </h1>
      </Link>
    </header>
  );
};
