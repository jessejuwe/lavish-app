import type { NextPage } from 'next';
import Head from 'next/head';
import SectionOne from '../containers/SectionOne';
import { homeObjFour, homeObjThree, homeObjTwo } from '../helpers/data';

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>LAVISH</title>
        <meta name="LAVISH" content="LAVISH home page, powered by Next.js" />
        <link rel="icon" href="/lavish.ico" />
      </Head>

      <main>
        <SectionOne {...homeObjThree} />
        <SectionOne {...homeObjTwo} />
        <SectionOne {...homeObjFour} />
      </main>
    </div>
  );
};

export default Home;
