import prisma from "./lib/prisma";
export default async (req, res) => {
  try {
    if (
      req.query.filters_received &&
      Array.isArray(JSON.parse(req.query.filters_received))
    ) {
      const filters_received = JSON.parse(req.query.filters_received).map(
        (rbfr) => ({
          domain: {
            contains: rbfr,
          },
        })
      );
      const openSourceProjects = await prisma.openSourceProjects.findMany({
        where: {
          OR: filters_received,
          AND: [{ status: "Active" }],
        },
        skip: parseInt(req.query.currentPageIndex),
        take: 5,
      });
      res.status(200).json(openSourceProjects);
    } else {
      const openSourceProjects = await prisma.openSourceProjects.findMany({
        skip: parseInt(req.query.currentPageIndex),
        take: 5,
        where: {
          AND: [{ status: "Active" }],
        },
      });
      res.status(200).json(openSourceProjects);
    }
  } catch (err) {
    console.log(err);
    res
      .status(403)
      .json({ err: "Error occured while getting openSourceProjects" });
  }
};
