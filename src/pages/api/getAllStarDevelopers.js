import prisma from "./lib/prisma";
export default async (req, res) => {
  try {
    const allStarDevelopers = await prisma.starDeveloper.findMany({
      where: {
        AND: {
          status: "Active",
        },
      },
    });
    res.status(200).json(allStarDevelopers);
  } catch (err) {
    console.log(err);
    res.status(403).json({
      err: "Error occured while getting allStarDevelopers",
    });
  }
};
