import { PrismaClient, Todo } from "@prisma/client";
import { TodoForm } from "../../../components/todo/TodoForm";
import { getDate } from "../../../utils/Date";

const prisma = new PrismaClient();

const Todo: (props: any) => Promise<JSX.Element> = async (props: any) => {
  const todo: Todo | null = await prisma.todo.findUnique({
    where: { id: parseInt(props.params.id) },
  });
  if (todo) {
    todo.createdAt = getDate(todo.createdAt);
    todo.updatedAt = getDate(todo.updatedAt);
  }

  if (!todo) throw new Error("Todo not found");

  return <TodoForm todo={todo} />;
};

export default Todo;
