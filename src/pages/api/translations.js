import Translation from "../../mangoose/translationSchema.js";
import dbConnect from "../../mangoose/db";

function pages(l, p) {
  const page = {
    layout: `${l}.copyright ${l}.navigation ${l}.title`,
    home: `${l}.buttonText`,
    add: ` ${l}.newMeetup`,
  };
  return page[p];
}

export default async function handler(req, res) {
  if (req.method === "GET") {
    await dbConnect();
    const { lang, page } = req.query;
    const query = pages(lang, page);
    let filter = {};
    filter[`${lang}`] = { $exists: true };
    try {
      const translation = await Translation.find(filter, query);
      res.status(200).json(translation);
    } catch (error) {
      res.status(500).json({ error: "Что-то пошло не так" });
    }
  } else {
    res.status(405).json({ error: "Метод не поддерживается" });
  }
}
