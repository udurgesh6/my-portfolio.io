import prisma from "./lib/prisma";
import AWS from "aws-sdk";

const ses = new AWS.SES({ region: "us-east-1" });
export default async (req, res) => {
  console.log(req.body);
  try {
    // const params = {
    //   Source: "support@happyagility.com", // Replace with your sender email address
    //   Destination: {
    //     ToAddresses: ["udurgesh6@gmail.com"], // Replace with the recipient email address
    //   },
    //   Message: {
    //     Subject: {
    //       Data: "Test Email", // Replace with the subject of your email
    //     },
    //     Body: {
    //       Text: {
    //         Data: "Hello, world!", // Replace with the body of your email
    //       },
    //     },
    //   },
    // };

    // // Send the email
    // ses.sendEmail(params, (error, data) => {
    //   if (error) {
    //     console.error("Failed to send email:", error);
    //     res.status(500).send("Failed to send email");
    //   } else {
    //     console.log("Email sent successfully:", data);
    //     res.status(200).send("Email sent successfully");
    //   }
    // });
    const updatedProjectInvolvementDetails =
      await prisma.projectInvolvementDetails.updateMany({
        where: {
          AND: [
            { project_id: req.body.project_id },
            { user_id: req.body.user_id },
          ],
        },
        data: {
          liked: req.body.liked,
          disliked: req.body.disliked,
          applied: req.body.applied,
        },
      });
    res.status(200).json(updatedProjectInvolvementDetails);
  } catch (err) {
    console.log(err);
    res.status(403).json({
      err: "Something went wrong while updating updatedProjectInvolvementDetails",
    });
  }
};
