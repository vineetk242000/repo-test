import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  // Get all homes
  if (req.method === "GET") {
    try {
      const homes = await prisma.home.findMany();
      res.status(200).json(homes);
    } catch (e) {
      res.status(500).json({ message: "Something went wrong" });
    }
  }
}
