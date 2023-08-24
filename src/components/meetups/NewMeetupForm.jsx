import { useState } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";
import { useRouter } from "next/router";
import ImageUpload from "./ImageUpload";
import useTranslations from "@/cutomHooks/useTranslation";
import Spinner from "../ui/Spinner";

function NewMeetupForm(props) {
  const [base64, setBase64] = useState({});
  const [uploadImage, setUploadImage] = useState("");
  const [activeLanguage, setActiveLanguage] = useState("hy");
  const locale = useRouter().locale;

  const [formData, setFormData] = useState({
    ru: {
      title: "",
      address: "",
      description: "",
    },
    hy: {
      title: "",
      address: "",
      description: "",
    },
    en: {
      title: "",
      address: "",
      description: "",
    },
  });

  const handleInputChange = (e, language) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [language]: {
        ...formData[language],
        [name]: value,
      },
    });
  };

  function getFile(base64) {
    setBase64(base64);
  }

  async function submitHandler(event) {
    event.preventDefault();
    props.onAddMeetup({ ...formData, image: uploadImage || base64 });
  }

  const { newMeetup } = useTranslations(locale, "add");

  const resetFormAndChangeLang = (lang) => {
    setActiveLanguage(lang);
    setFormData({
      ...formData,
      [lang]: {
        ...formData[lang],
      },
    });
  };

  return (
    <>
      <Card>
        {newMeetup ? (
          <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.checkboxes}>
              <label>
                <input
                  type='radio'
                  value='hy'
                  checked={activeLanguage === "hy"}
                  onChange={() => resetFormAndChangeLang("hy")}
                />
                Hy
              </label>
              <label>
                <input
                  type='radio'
                  value='en'
                  checked={activeLanguage === "en"}
                  onChange={() => resetFormAndChangeLang("en")}
                />
                En
              </label>
              <label>
                <input
                  type='radio'
                  value='ru'
                  checked={activeLanguage === "ru"}
                  onChange={() => resetFormAndChangeLang("ru")}
                />
                Ru
              </label>
            </div>
            <div className={classes.control}>
              <label htmlFor='title'>{newMeetup.title}</label>
              <input
                type='text'
                required
                id='title'
                name='title'
                onChange={(e) => handleInputChange(e, activeLanguage)}
                value={formData[activeLanguage].title}
              />
            </div>
            <div className={classes.control}>
              <label htmlFor='image'>{newMeetup.Image}</label>
              <input
                type='url'
                id='image'
                onChange={(e) => setUploadImage(e.target.value)}
              />
            </div>
            <div className={classes.control}>
              <ImageUpload getImage={getFile} choose={newMeetup.choose} />
            </div>
            <div className={classes.control}>
              <label htmlFor='address'>{newMeetup.address}</label>
              <input
                type='text'
                required
                id='address'
                name='address'
                onChange={(e) => handleInputChange(e, activeLanguage)}
                value={formData[activeLanguage].address}
              />
            </div>
            <div className={classes.control}>
              <label htmlFor='description'>{newMeetup.description}</label>
              <textarea
                id='description'
                required
                rows='5'
                name='description'
                onChange={(e) => handleInputChange(e, activeLanguage)}
                value={formData[activeLanguage].description}
              ></textarea>
            </div>
            <div className={classes.actions}>
              <button>{newMeetup.button}</button>
            </div>
          </form>
        ) : (
          <Spinner />
        )}
      </Card>
    </>
  );
}

export default NewMeetupForm;

