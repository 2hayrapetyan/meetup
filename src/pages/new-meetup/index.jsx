import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import Spinner from "@/components/ui/Spinner";
import IsNSFWContent from "@/cutomHooks/IsNSFWContent";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

function NewMeetup() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { locale } = useRouter();
  const router = useRouter();
  async function newMeetupHandler(newMeetupData) {
    setIsSubmitting(true);
    try {
      let res = await IsNSFWContent(newMeetupData.image)
      console.log(res);
      if(res === 'safe') {
        const response = await fetch("/api/new-meetup", {
          method: "POST",
          body: JSON.stringify({ ...newMeetupData, lang: locale }),
          headers: {
            "Content-type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Ошибка при создании встречи.");
        }
        router.push("/all-meetups");
      }else{
        console.log('chmo normal nkar qic');
      }
    } catch (error) {
      console.error("Ошибка при создании встречи:", error);
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
      ) : (
        <NewMeetupForm onAddMeetup={newMeetupHandler} />
      )}
    </>
  );
}

export default NewMeetup;
