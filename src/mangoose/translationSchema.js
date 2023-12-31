import mongoose, { Schema } from "mongoose";

const translationSchema = new Schema({
  en: {
    title: {
      type: String,
    },
    navigation: {
      navItem0: {
        type: String,
      },
      navItem1: {
        type: String,
      },
      navItem2: {
        type: String,
      },
      navItem3: {
        type: String,
      },
    },
    buttonText: {
      type: String,
    },
    newMeetup: {
      title: {
        type: String,
      },
      Image: {
        type: String,
      },
      choose: {
        type: String,
      },
      address: {
        type: String,
      },
      description: {
        type: String,
      },
      button: {
        type: String,
      },
    },
    copyright: {
      type: String,
    },
    header: {
      type: String,
    },
  },
  hy: {
    title: {
      type: String,
    },
    navigation: {
      navItem0: {
        type: String,
      },
      navItem1: {
        type: String,
      },
      navItem2: {
        type: String,
      },
      navItem3: {
        type: String,
      },
    },
    buttonText: {
      type: String,
    },
    newMeetup: {
      title: {
        type: String,
      },
      Image: {
        type: String,
      },
      choose: {
        type: String,
      },
      address: {
        type: String,
      },
      description: {
        type: String,
      },
      button: {
        type: String,
      },
    },
    copyright: {
      type: String,
    },
    header: {
      type: String,
    },
  },
  ru: {
    title: {
      type: String,
    },
    navigation: {
      navItem0: {
        type: String,
      },
      navItem1: {
        type: String,
      },
      navItem2: {
        type: String,
      },
      navItem3: {
        type: String,
      },
    },
    buttonText: {
      type: String,
    },
    newMeetup: {
      title: {
        type: String,
      },
      Image: {
        type: String,
      },
      choose: {
        type: String,
      },
      address: {
        type: String,
      },
      description: {
        type: String,
      },
      button: {
        type: String,
      },
    },
    copyright: {
      type: String,
    },
    header: {
      type: String,
    },
  },
});

export default mongoose.models.Translation ||
  mongoose.model("Translation", translationSchema);
