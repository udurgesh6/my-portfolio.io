import prisma from "./lib/prisma";
export default async (req, res) => {
  try {
    const openSourceProjectDetails = await prisma.openSourceProjects.findMany({
      where: {
        OR: [
          {
            project_id: {
              contains: req.query.project_id,
            },
          },
        ],
      },
      include: {
        ProjectInvolvementDetails: true,
        user: true,
      },
    });
    res.status(200).json(openSourceProjectDetails);
  } catch (err) {
    console.log(err);
    res.status(403).json({
      err: "Error occured while getting openSourceProjectDetails with provided project_id",
    });
  }
};
