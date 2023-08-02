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
        <h2>
          <Link href='/new-meetup'>Add meetup ?</Link>
        </h2>
      )}
    </>
  );
}

export async function getServerSideProps({ locale }) {
  try {
    await dbConnect();
    const query = { [locale]: { $exists: true } };
    const meetups = await Meetup.find(query);
    return {
      props: {
        meetups: meetups.map((meetup) => ({
          title: meetup[locale].title,
          address: meetup[locale].address,
          image: meetup[locale]?.image || meetup.hy.image,
          id: meetup._id.toString(),
        })),
      },
    };
  } catch (error) {
    console.error("Error fetching meetups:", error);
    return {
      props: {
        meetups: [],
      },
    };
  }
}

export default HomePage;

