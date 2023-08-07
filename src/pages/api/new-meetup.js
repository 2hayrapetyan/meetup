import dbConnect from "@/mangoose/db.js";
import Meetup from "@/mangoose/meetupSchema.js";
import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { title, address, image, description, lang } = req.body;
      let img = null;
      if (typeof image === "object" && image.base64 && image.fileName) {
        try {
          const base64Data = image.base64;
          const fileName = image.fileName;
          const filePath = path.join("./public/uploads", `${fileName}`);
          const buffer = Buffer.from(base64Data, "base64");
          fs.writeFileSync(filePath, buffer);
          img = `/public/uploads/${fileName}`;
        } catch (error) {
          console.error("Error while writing the file:", error);
        }
      } else {
        img = image;
      }

      const languageData = {
        [lang]: {
          title,
          address,
          image: img,
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

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
};
