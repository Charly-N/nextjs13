import { PrismaClient, Todo } from "@prisma/client";
import { ReactComponentElement } from "react";
import { TodoForm } from "../../../components/todo/TodoForm";
import { getDate } from "../../../utils/Date";

const prisma = new PrismaClient();

type Modify<T, R> = Omit<T, keyof R> & R;

type Formatted_todo = Modify<
  Todo,
  { createdAt: string | undefined; updatedAt: string | undefined }
>;

const Todo = async (props: any) => {
  const todo: Todo | null = await prisma.todo.findUnique({
    where: { id: parseInt(props.params.id) },
  });
  if (todo) {
    const formatted_todo: Formatted_todo = {
      ...todo,
      createdAt: getDate(todo.createdAt),
      updatedAt: getDate(todo.updatedAt),
    };
    return <TodoForm todo={formatted_todo} />;
  }

  if (!todo) throw new Error("Todo not found");
};

export default Todo;
