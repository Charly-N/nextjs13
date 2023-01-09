import { PrismaClient } from "@prisma/client";
import { TodoForm } from "../../../components/todo/TodoForm";
import { getDate } from "../../../utils/Date";

const prisma = new PrismaClient();

const Todo: (props: any) => Promise<JSX.Element> = async (props: any) => {
  const todo: any = await prisma.todo.findUnique({
    where: { id: parseInt(props.params.id) },
  });
  let formatted_todo: any = {};
  if (todo) {
    formatted_todo = {
      ...todo,
      createdAt: getDate(todo.createdAt),
      updatedAt: getDate(todo.updatedAt),
    };
  }

  if (!todo) throw new Error("Todo not found");

  return <TodoForm todo={formatted_todo} />;
};

export default Todo;
