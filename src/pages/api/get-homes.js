import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const params = req.query;
  // Get all homes
  if (req.method === "GET" && !Object.keys(params).length) {
    try {
      const homes = await prisma.home.findMany();
      res.status(200).json(homes);
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: "Something went wrong" });
    }
  }

  const filter = {
    where: {},
  };

  if (params.beds) {
    filter.where.beds = parseInt(params.beds);
  }

  if (params.lowerPrice && params.upperPrice) {
    filter.where.price = {
      gte: parseInt(params.lowerPrice),
      lte: parseInt(params.upperPrice),
    };
  }

  // Get homes by bedrooms
  if (req.method === "GET" && Object.keys(params).length) {
    try {
      const homes = await prisma.home.findMany(filter);
      res.status(200).json(homes);
    } catch (e) {
      res.status(500).json({ message: "Something went wrong" });
    }
  }
}
