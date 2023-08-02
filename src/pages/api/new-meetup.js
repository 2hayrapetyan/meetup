import dbConnect from "@/mangoose/db.js";
import Meetup from "@/mangoose/meetupSchema.js";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { title, address, image, description,lang } = req.body;
      const languageData = {
        [lang]: {
          title,
          address,
          image,
          description,
        },
      };
      await dbConnect();
      const meetup = await Meetup.create(languageData);
      res.status(201).json({ success: true, data: meetup });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  }
}

