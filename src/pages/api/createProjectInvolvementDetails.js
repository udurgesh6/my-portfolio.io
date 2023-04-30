import prisma from "./lib/prisma";

export default async (req, res) => {
  try {
    const result = await prisma.projectInvolvementDetails.create({
      data: {
        disliked: req.body.disliked,
        liked: req.body.liked,
        project_id: req.body.project_id,
        user_id: req.body.user_id,
        applied: req.body.applied,
      },
    });
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(403).json({ err: err });
  }
};
