import prisma from "./lib/prisma";

export default async (req, res) => {
  try {
    const result = await prisma.requirements.create({
      data: {
        name: req.body.name,
        description: req.body.description,
        skills: req.body.skills,
        requirement_type: req.body.requirement_type,
        start_budget: parseInt(req.body.start_budget),
        end_budget: parseInt(req.body.end_budget),
        offline_availability: req.body.offline_availability,
        online_availability: req.body.online_availability,
        location: req.body.location,
        email: req.body.email,
        phone: req.body.phone,
        user_id: req.body.user_id,
        requirement_status: "Inactive",
      },
    });
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(403).json({ err: err });
  }
};
