import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method == "POST") {
    try {
      const user1 = req.body;
      console.log(user1)
      const checkIfExist = await prisma.user.findUnique({
        where: {
          email: req.body.email,
        },
      });
      if (checkIfExist !== null) {
        res.status(200).json({ result: "User Already Exists" });
      } else {
        const result = await prisma.user.create({
          data: {
            ...req.body,
          },
        });
        res.status(200).json({ result: "Registration Successfull" });
      }
    } catch (err) {
      console.log(err);
      res.status(400).json({ result: "Internal error" });
    }
  }else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
