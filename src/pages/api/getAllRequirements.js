import prisma from "./lib/prisma";
export default async (req, res) => {
  try {
    const allRequirements = await prisma.requirements.findMany({
      where: {
        AND: {
          requirement_status: "Active",
        },
      },
    });
    res.status(200).json(allRequirements);
  } catch (err) {
    console.log(err);
    res.status(403).json({
      err: "Error occured while getting allRequirements",
    });
  }
};
