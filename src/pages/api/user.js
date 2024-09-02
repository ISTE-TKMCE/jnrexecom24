import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default async function handler(req, res) {
  if(req.method === 'POST') {
    try {
      const checkIfExist = await prisma.user.findUnique({
        where: {
          email: req.body.email, 
        },
      });
      if(checkIfExist!==null) {
        res.status(400).json({result: 'user already exists'});
      }
      else {
        const result = await prisma.user.create({
          data: {
            ...req.body,
          },
        });
        res.status(200).json({ result: 'user added successfully' });
      }
    }
    catch(error) {
      res.status(500).json({error: "An error occurred"});
    }
  }
  res.status(405).json({ error: "Method not allowed" });
}
