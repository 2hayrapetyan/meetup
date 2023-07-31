import MeetupDetail from "@/components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
import { useRouter } from "next/router";

function MeetupId({ meetupData }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{meetupData.title}</title>
        <meta name='description' content={meetupData.description} />
      </Head>
      <MeetupDetail
        address={meetupData.address}
        image={meetupData.image}
        title={meetupData.title}
        description={meetupData.description}
      />
    </>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://yeghish:exish2002@cluster0.0vrhcsc.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    fallback: 'blocking',
    paths: meetups.map((i) => ({ params: { meetupId: i._id.toString() } })),
  };
}

export async function getStaticProps(context) {
  const id = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://yeghish:exish2002@cluster0.0vrhcsc.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetup = await meetupsCollection.findOne({ _id: new ObjectId(id) });
  return {
    props: {
      meetupData: meetup.data,
    },
  };
}

export default MeetupId;
