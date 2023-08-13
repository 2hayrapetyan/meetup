import Img from "@/components/ui/Img";
import Head from "next/head";
import MainPage from "@/components/ui/MainPage";

export default function Home() {
    return (
      <>
        <Head>
          <title>NatureMeet</title>
          <meta
            name='description'
            content='Browse a huge list of highly active meetups'
          />
        </Head>
     <MainPage />
      </>
    );
  }
  