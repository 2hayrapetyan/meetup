import MeetupDetail from "@/components/meetups/MeetupDetail";
import dbConnect from "@/mangoose/db.js";
import Meetup from "@/mangoose/meetupSchema.js";
import Head from "next/head";

function MeetupId({ meetup, image }) {
  return (
    <>
      <Head>
        <title>{meetup.title}</title>
        <meta name='description' content={meetup.description} />
      </Head>
      <MeetupDetail
        address={meetup.address}
        image={image}
        title={meetup.title}
        description={meetup.description}
      />
    </>
  );
}

export async function getServerSideProps({ params, locale }) {
  await dbConnect();
  const meetup = await Meetup.findById(params.meetupId).lean();
  const meetupByLocal = meetup[locale];
  const image = meetup.hy.image;
  meetup._id = meetup._id.toString();
  return { props: { meetup: meetupByLocal, image } };
}

export default MeetupId;
