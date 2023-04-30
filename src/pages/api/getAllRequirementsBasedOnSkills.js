import prisma from "./lib/prisma";
export default async (req, res) => {
  try {
    console.log(
      JSON.parse(req.query.skills).map((skill) => `skills LIKE '%${skill}%'`)
    );
    const allRequirements = await prisma.requirements.findMany({
      where: {
        OR: JSON.parse(req.query.skills).map((skill) => ({
          skills: { contains: skill },
        })),
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
