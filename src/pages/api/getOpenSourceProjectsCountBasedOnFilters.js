import prisma from "./lib/prisma";
export default async (req, res) => {
  try {
    let filtered_options = JSON.parse(req.query.filters_received).map((fo) => ({
      domain: fo,
    }));
    const count = await prisma.openSourceProjects.count({
      where: {
        OR: filtered_options,
        AND: [{ status: "Active" }],
      },
    });
    res.status(200).json(count);
  } catch (err) {
    console.log(err);
    res.status(403).json({
      err: "Error occured while getting count of openSourceProjectsBasedOnFilters",
    });
  }
};
