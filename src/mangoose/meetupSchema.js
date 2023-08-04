import mongoose, { Schema } from "mongoose";

const meetupSchema = new Schema({
  hy: {
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
      required: false,
    },
    description: {
      type: String,
      required: true,
    },
  },
  ru: {
    title: {
      type: String,
    },
    address: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  en: {
    title: {
      type: String,
    },
    address: {
      type: String,
    },
    description: {
      type: String,
    },
  },
});

export default mongoose.models.Meetup || mongoose.model("Meetup", meetupSchema);
