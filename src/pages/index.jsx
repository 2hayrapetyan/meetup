import MeetupList from "@/components/meetups/MeetupList";
import dbConnect from "@/mangoose/db.js";
import Meetup from "@/mangoose/meetupSchema.js";
import Head from "next/head";
import Link from "next/link";

function HomePage({ meetups }) {
  return (
    <>
      <Head>
        <title>Meetups</title>
        <meta
          name='description'
          content='Browse a huge list of highly active meetups'
        />
      </Head>
      {meetups.length !== 0 ? (
        <MeetupList meetups={meetups} />
      ) : (
        <h2><Link href='/new-meetup' >Add meetup ?</Link></h2>
      )}
    </>
  );
}

export async function getServerSideProps() {
  await dbConnect();
  const meetups = await Meetup.find({});
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
  };
}

export default HomePage;
