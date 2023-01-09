import "./globals.css";
import { Header } from "./Header";
import { Navbar } from "./Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="w-full h-screen relative max-w-5xl mx-auto">
        <Header />
        <div className="flex">
          {/* @ts-expect-error Server Component */}
          <Navbar />
          <main className="w-full py-4 px-8 max-w-3xl flex flex-col">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
