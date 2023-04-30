import prisma from "./lib/prisma";
export default async (req, res) => {
  try {
    const starDeveloper = await prisma.starDeveloper.findMany({
      where: {
        user_id: req.query.user_id,
        status: "Active",
      },
    });
    res.status(200).json(starDeveloper);
  } catch (err) {
    console.log(err);
    res.status(403).json({
      err: "Error occured while getting starDeveloper",
    });
  }
};
