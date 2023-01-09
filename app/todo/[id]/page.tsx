import { PrismaClient, Todo } from "@prisma/client";
import { ReactComponentElement } from "react";
import { TodoForm } from "../../../components/todo/TodoForm";
import { getDate } from "../../../utils/Date";

const prisma = new PrismaClient();

interface Formatted_todo extends Todo {
  createdAt: string;
  updatedAt: string;
}

const Todo: (props: Todo) => Promise<> = async (props: Todo) => {
  const todo: Todo = await prisma.todo.findUnique({
    where: { id: parseInt(props.params.id) },
  });
  let formatted_todo: Formatted_todo | {} = {};
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
