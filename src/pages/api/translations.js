import Translation from "../../mangoose/translationSchema.js";
import dbConnect from "../../mangoose/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    await dbConnect();
    const { key, lang } = req.query;
    const keysArray = Array.isArray(key) ? key : [key];
    let filter = {};
    filter[`${lang}`] = { $exists: true };
    const projection = {};
    keysArray.forEach((field) => {
      projection[`${lang}.${field}`] = 1;
    });
    try {
      const translation = await Translation.find(filter, projection);
      res.status(200).json(translation);
    } catch (error) {
      res.status(500).json({ error: "Что-то пошло не так" });
    }
  } else {
    res.status(405).json({ error: "Метод не поддерживается" });
  }
}
