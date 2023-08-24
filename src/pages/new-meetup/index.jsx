import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import Card from "@/components/ui/Card";
import Spinner from "@/components/ui/Spinner";
import IsNSFWContent from "@/cutomHooks/IsNSFWContent";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

function NewMeetup() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const { locale } = useRouter();
  const router = useRouter();

  const errorText = {
    en: "the image content is incorrect",
    hy: "Նկարի պարունակությունը անընդունելի է",
    ru: "Содержимое изображения некорректное",
  };

  async function newMeetupHandler(newMeetupData) {
    setIsSubmitting(true);
    try {
      let res = await IsNSFWContent(newMeetupData.image);
      if (res === "safe") {
        const response = await fetch("/api/new-meetup", {
          method: "POST",
          body: JSON.stringify(newMeetupData),
          headers: {
            "Content-type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Ошибка при создании встречи.");
        }
        router.push("/all-meetups");
      } else {
        setError(true);
      }
    } catch (error) {
      console.error("Ошибка при создании встречи:", error);
      setError(true);
    }
    setIsSubmitting(false);
  }

  return (
    <>
      <Head>
        <title>Add a new meetup</title>
        <meta
          name='description'
          content='add your own meetups and create amazing opportunities'
        />
      </Head>
      {isSubmitting ? (
        <Spinner />
      ) : error ? (
        <Card>
          <p style={{ padding: "20px" }}>
            {errorText[locale]}
            <span
              onClick={() => setError(false)}
              style={{
                cursor: "pointer",
                marginLeft: "15px",
                color: "blue",
                fontSize: "1.3rem",
              }}
            >
              &#x21bb;
            </span>
          </p>
        </Card>
      ) : (
        <NewMeetupForm onAddMeetup={newMeetupHandler} />
      )}
    </>
  );
}

export default NewMeetup;
