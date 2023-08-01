import dbConnect from "@/mangoose/db.js";
import Meetup from "@/mangoose/meetupSchema.js";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await dbConnect();
      const meetup = await Meetup.create(req.body);
      res.status(201).json({ success: true, data: meetup });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  }
}

