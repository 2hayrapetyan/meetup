import { useRef, useState } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";
import { useRouter } from "next/router";
import ImageUpload from "./ImageUpload";
import useTranslations from "@/cutomHooks/useTranslation";

function NewMeetupForm(props) {
  const [base64, setBase64] = useState({});
  const locale = useRouter().locale;
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function getFile(base64) {
    setBase64(base64);
  }

  function submitHandler(event) {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const meetupData = {
      title: enteredTitle,
      image: enteredImage || base64,
      address: enteredAddress,
      description: enteredDescription,
    };
    props.onAddMeetup(meetupData);
  }

  const {newMeetup} = useTranslations(locale, "add");

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>{newMeetup && newMeetup.title}</label>
          <input type='text' required id='title' ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>{newMeetup && newMeetup.Image}</label>
          <input type='url' id='image' ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <ImageUpload
            getImage={getFile}
            choose={newMeetup && newMeetup.choose}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>{newMeetup && newMeetup.address}</label>
          <input type='text' required id='address' ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>
            {newMeetup && newMeetup.description}
          </label>
          <textarea
            id='description'
            required
            rows='5'
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>{newMeetup && newMeetup.button}</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
