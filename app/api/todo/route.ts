import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const todos = await prisma.todo.findMany();
    return new Response(JSON.stringify(todos), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch todos.", { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const newTodo = await prisma.todo.create({
      data: {
        title: data.title,
      },
    });
    return new Response(JSON.stringify(newTodo), { status: 200 });
  } catch (error) {
    return new Response("Failed to create todo.", { status: 500 });
  }
}
