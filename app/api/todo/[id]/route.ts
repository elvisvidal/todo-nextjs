import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request, params: { params: { id: string } }) {
  try {
    const todo = await prisma.todo.findUnique({
      where: { id: parseInt(params.params.id) },
    });

    if (!todo) {
      return new Response("Todo not found.", { status: 404 });
    }

    return new Response(JSON.stringify(todo), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response("Failed to fetch todo.", { status: 500 });
  }
}

export async function PUT(req: Request, params: { params: { id: string } }) {
  try {
    const data = await req.json();
    const updatedTodo = await prisma.todo.update({
      where: { id: parseInt(params.params.id) },
      data: { title: data.title },
    });
    return new Response(JSON.stringify(updatedTodo), { status: 200 });
  } catch (error) {
    return new Response("Failed to update todo.", { status: 500 });
  }
}

export async function DELETE(req: Request, params: { params: { id: string } }) {
  try {
    await prisma.todo.delete({
      where: { id: parseInt(params.params.id) },
    });
    return new Response("Todo deleted successfully.", { status: 200 });
  } catch (error) {
    return new Response("Failed to delete todo.", { status: 500 });
  }
}
