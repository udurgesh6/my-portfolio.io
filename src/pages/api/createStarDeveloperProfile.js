import prisma from "./lib/prisma";

export default async (req, res) => {
  try {
    const result = await prisma.starDeveloper.create({
      data: {
        rating: 800,
        designation: req.body.designation,
        avatar: req.body.avatar,
        about: req.body.about,
        skills: req.body.skills,
        charges_per_hour: req.body.charges_per_hour,
        offline_availability: req.body.offline_availability,
        online_availability: req.body.online_availability,
        open_for_mentorship: req.body.open_for_mentorship,
        portfolio_url: req.body.portfolio_url,
        linkedin_url: req.body.linkedin_url,
        github_profile_url: req.body.github_profile_url,
        location: req.body.location,
        email: req.body.email,
        phone: req.body.phone,
        user_id: req.body.user_id,
      },
    });
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(403).json({ err: err });
  }
};
