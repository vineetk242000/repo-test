import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth/next"
import { authOptions } from "./auth/[...nextauth]"
import { useSession } from "next-auth/react";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  // Check if user is authenticated
  const session = await getServerSession(req, res, authOptions);
  // ;
  // res.send(JSON.stringify(session))
  // console.log('session:', res.send(JSON.stringify(session)));
  if (!session) {
    return res.status(401).json({ message: "Unauthorized." });
  }


  // Create new home
  if (req.method === "POST") {
    try {
      const {
        image,
        title,
        description,
        price,
        guests,
        beds,
        baths,
        address,
        sqfeet,
        
      } = req.body;
      
      // Retrieve the current authenticated user
      const user = await prisma.user.findUnique({
        where: { email: session.user.email },
      });

      const home = await prisma.home.create({
        data: {
          image,
          title,
          address,
          sqfeet,
          description,
          price,
          guests,
          beds,
          baths,
          ownerId: user.id,
        },
      });
      res.status(200).json(home);
    } catch (e) {
      res.status(500).json({ message: "Something went wrong" });
    }
  }
  // HTTP method not supported!
  else {
    res.setHeader("Allow", ["POST"]);
    res
      .status(405)
      .json({ message: `HTTP method ${req.method} is not supported.` });
  }
}
