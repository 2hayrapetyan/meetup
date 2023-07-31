import MeetupList from "@/components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";

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
      <MeetupList meetups={meetups} />
    </>
  );
}

// export async function getServerSideProps() {
//   return {
//     props: {
//       meetups: DUMY_MEETUPS,
//     },
//   };
// }


export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://yeghish:exish2002@cluster0.0vrhcsc.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.data.title,
        address: meetup.data.address,
        image: meetup.data.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
