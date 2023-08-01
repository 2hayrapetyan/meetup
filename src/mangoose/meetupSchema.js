import  mongoose, { Schema }  from "mongoose";

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



export default mongoose.models.Meetup || mongoose.model('Meetup', meetupSchema)