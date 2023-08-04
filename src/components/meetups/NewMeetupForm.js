import { useMemo, useRef, useState } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";
import { useRouter } from "next/router";
import ImageUpload from "./ImageUpload";

function NewMeetupForm(props) {
 const [base64,setBase64] = useState({})
  const locale = useRouter().locale;
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();
  
function getFile(base64) {
  setBase64(base64)
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
  const formText = useMemo(
    () => ({
      en: {
        title: "Meetup Title",
        image: "Meetup Image (source of the image)",
        address: "Address",
        description: "Description",
        add: "Add Meetup",
      },
      hy: {
        title: "վերնագիր",
        image: "պատկեր (պատկերի հղումը)",
        address: "Հասցե",
        description: "նկարագրություն",
        add: "ավելացնել",
      },
      ru: {
        title: "Название",
        image: "Изображение (источник изображения)",
        address: "Адрес",
        description: "Описание",
        add: "Добавить",
      },
    }),
    []
  );

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>{formText[locale].title}</label>
          <input type='text' required id='title' ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>{formText[locale].image}</label>
          <input type='url' id='image' ref={imageInputRef} />
          <ImageUpload getImage={getFile}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>{formText[locale].address}</label>
          <input type='text' required id='address' ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>{formText[locale].description}</label>
          <textarea
            id='description'
            required
            rows='5'
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>{formText[locale].add}</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
