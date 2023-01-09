import { PrismaClient } from "@prisma/client";
import Link from "next/link";

const prisma = new PrismaClient();

export const Navbar: () => Promise<JSX.Element> = async () => {
  const todos: an[] = await prisma.todo.findMany();

  return (
    <nav className="w-36 p-4 mr-8 flex h-full relative left-0 flex-col">
      <Link href="/todo/new" className="btn btn-info px-8 mb-4 text-white">
        New
      </Link>
      <ul className="text-sm font-bold text-pink-300">
        {todos.map((todo: any) => (
          <li key={todo.id} className="cursor-pointer py-2 hover:drop-shadow-w">
            <Link href={`/todo/${todo.id}`}>
              <span>{todo.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
