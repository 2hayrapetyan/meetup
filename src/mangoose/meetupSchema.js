import { Schema, model } from "mongoose";

const meetupSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Meetup = model("Meetup", meetupSchema);

export default Meetup;
