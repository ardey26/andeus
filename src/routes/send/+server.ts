/* eslint-disable no-useless-escape */
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const POST = async ({ request }) => {
  const { email, message } = await request.json();

  const sentEmail = await prisma.email.create({
    data: {
      emailAddress: email,
      emailMessage: message,
    },
  });
  return new Response(JSON.stringify({ message: "Successfully sent" }));
};
