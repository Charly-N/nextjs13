// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient, Todo } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { resolve } from "path";

const prisma = new PrismaClient();

type Data = {
  todo?: Todo;
  error?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const body = JSON.parse(req.body);

  if (req.method === "PATCH") {
    prisma.todo
      .update({
        where: { id: parseInt(req.query.id as string) },
        data: body,
      })
      .then((todo : Todo) => {
        console.log(todo);

        res.status(200).json({ todo: todo });
      });
  }
}
