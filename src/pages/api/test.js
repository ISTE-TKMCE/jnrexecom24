import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method == "POST") {
    try {
      const user = req.body;
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
  }
}
