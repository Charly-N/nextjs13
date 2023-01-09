"use client";
import { FormEvent, useState } from "react";
import { Todo, User } from "@prisma/client";
import { getDate, getTime } from "../../utils/Date";
import { useRouter } from "next/navigation";

export const TodoForm = ({
  todo,
}: {
  todo: (Todo & { author: User }) | null;
}) => {
  const [Completed, setCompleted] = useState(todo?.completed || false);
  const router = useRouter();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fd = new FormData(event.currentTarget);
    const entries = Object.fromEntries(fd.entries()) as any;
    entries["completed"] = Completed ? true : false;

    fetch(`/api/todo/${todo?.id}`, {
      method: todo ? "PATCH" : "POST",
      body: JSON.stringify(entries),
    })
      .then((res) => console.log(res.json(), router.refresh()))
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        type="text"
        name="title"
        defaultValue={todo?.title}
        placeholder="title"
        className="mb-8 input input-ghost w-full max-w-lg drop-shadow-w"
      />
      <textarea
        placeholder="content"
        name="content"
        defaultValue={todo?.content ? todo.content : ""}
        className="mb-8 textarea textarea-ghost h-48 w-full drop-shadow-w"
      />
      <div className="flex justify-between pl-2 pr-4 pt-2">
        <p>
          <span className="text-sm font-extralight">author</span>
          <br />
          <span className="drop-shadow-w">{todo?.author.name}</span>
        </p>
        <p>
          <span className="text-sm font-extralight">created</span>
          <br />
          <span className="drop-shadow-w">{getDate(todo?.createdAt)}</span>
        </p>
        <p>
          <span className="text-sm font-extralight">updated</span>
          <br />
          <span className="drop-shadow-w">{getDate(todo?.updatedAt)}</span>
        </p>
      </div>
      <div className="mt-14 flex justify-between items-center">
        <label className="label cursor-pointer w-min flex items-start">
          <span
            className={
              Completed
                ? "label-text text-pink-400 drop-shadow-w mb-2 mr-6 text-sm font-extralight transition-all duration-150 ease-in-out"
                : "label-text mb-2 mr-6 text-sm font-extralight transition-all duration-150 ease-in-out"
            }
          >
            COMPLETED
          </span>
          <input
            type="checkbox"
            name="completed"
            className="toggle toggle-info"
            defaultChecked={Completed}
            onClick={() => setCompleted(!Completed)}
          />
        </label>
        <button type="submit" className="btn btn-outline btn-info">
          Save
        </button>
      </div>
    </form>
  );
};
