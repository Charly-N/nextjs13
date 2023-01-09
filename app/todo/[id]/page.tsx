import { PrismaClient, Todo, User } from "@prisma/client";
import { TodoForm } from "../../../components/todo/TodoForm";

const prisma = new PrismaClient();

const Todo: (props: any) => Promise<JSX.Element> = async (props: any) => {
  const todo: (Todo & { author: User }) | null = await prisma.todo.findUnique({
    where: { id: parseInt(props.params.id) },
    include: { author: true },
  });

  if (!todo) throw new Error("Todo not found");

  return <TodoForm todo={todo} />;
};

export default Todo;
