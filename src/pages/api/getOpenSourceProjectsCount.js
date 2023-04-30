import prisma from "./lib/prisma";
export default async (req, res) => {
  try {
    const count = await prisma.openSourceProjects.count({
      where: {
        AND: [{ status: "Active" }],
      },
    });
    res.status(200).json(count);
  } catch (err) {
    console.log(err);
    res.status(403).json({
      err: "Error occured while getting count of openSourceProjects",
    });
  }
};
