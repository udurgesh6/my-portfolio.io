import prisma from "./lib/prisma";

export default async (req, res) => {
  try {
    const result = await prisma.openSourceProjects.create({
      data: {
        project_name: req.body.project_name,
        project_description: req.body.project_description,
        license_type: req.body.license_type,
        project_image: req.body.project_image,
        programming_languages: req.body.programming_languages,
        framework_library: req.body.framework_library,
        maintainer_email: req.body.maintainer_email,
        version: req.body.version,
        contribution_guidelines: req.body.contribution_guidelines,
        project_id: req.body.project_id,
        git_repo: req.body.git_repo,
        website_link: req.body.website_link,
        domain: req.body.domain,
        user_id: req.body.uid,
        show_git_repo: req.body.show_git_repo,
        show_website_link: req.body.show_website_link,
        isOpenSource: req.body.isOpenSource,
        acceptInvitation: req.body.acceptInvitation,
      },
    });
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(403).json({ err: err });
  }
};
