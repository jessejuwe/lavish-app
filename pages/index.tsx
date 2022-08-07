import type { NextPage } from 'next';
import Head from 'next/head';
import SectionOne from '../containers/SectionOne';
import {
  homeObjFour,
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from '../helpers/data';
import Header from '../layouts/Header';

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>LAVISH</title>
        <meta name="LAVISH" content="LAVISH home page, powered by Next.js" />
        <link rel="icon" href="/lavish.ico" />
      </Head>

      {/* <Header /> */}

      <main>
        <SectionOne {...homeObjOne} />
        <SectionOne {...homeObjThree} />
        <SectionOne {...homeObjTwo} />
        <SectionOne {...homeObjFour} />
      </main>
    </div>
  );
};

export default Home;
