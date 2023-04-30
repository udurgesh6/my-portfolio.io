import prisma from "./lib/prisma";

export default async (req, res) => {
  try {
    const result = await prisma.user.create({
      data: {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        user_id: req.body.user_id,
        email: req.body.email,
        linked_in: req.body.linked_in,
      },
    });
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(401).json({ err: "Error occured while creating a user" });
  }
};
