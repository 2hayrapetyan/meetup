import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import Head from "next/head";
import { useRouter } from "next/router";

function NewMeetup() {
    const router = useRouter()
  async function newMeetupHandler(newMeetupData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(newMeetupData),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    router.push('/')
  }
  return (
  <>
  <Head>
  <title>Add a new meetup</title>
        <meta
          name='description'
          content='add your own meetups and create amazing opportunites'
        />
  </Head>
  <NewMeetupForm onAddMeetup={newMeetupHandler} />
  </>
  )
}

export default NewMeetup;
