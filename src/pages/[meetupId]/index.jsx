import MeetupDetail from "@/components/meetups/MeetupDetail";
import dbConnect from "@/mangoose/db.js";
import Meetup from "@/mangoose/meetupSchema.js";
import Head from "next/head";

function MeetupId({ meetup }) {
  return (
    <>
      <Head>
        <title>{meetup.title}</title>
        <meta name='description' content={meetup.description} />
      </Head>
      <MeetupDetail
        address={meetup.address}
        image={meetup.image}
        title={meetup.title}
        description={meetup.description}
      />
    </>
  );
}

export async function getServerSideProps({ params }) {
  await dbConnect();
  const meetup = await Meetup.findById(params.meetupId).lean();
  meetup._id = meetup._id.toString();

  return { props: { meetup } };
}

export default MeetupId;
