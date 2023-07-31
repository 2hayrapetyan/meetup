import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://yeghish:exish2002@cluster0.0vrhcsc.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne({ data });
    console.log(result);
    client.close();
    res.status(201).json({ message: "meetup insertet" });
  }
}

export default handler;
