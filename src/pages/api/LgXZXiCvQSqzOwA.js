import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method == "POST") {
    if (req.body.key != "aravindpoliya") {
      res.status(200).json({ data: "wrong key" });
    } else {
      try {
        const usersData = await prisma.user.findMany();
        res.status(200).json({ data: usersData });
      } catch (err) {
        res.status(400).json({ data: "Internal Errer" });
      }
    }
  }
}
