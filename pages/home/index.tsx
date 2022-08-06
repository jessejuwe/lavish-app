import type { NextPage } from 'next';
import Head from 'next/head';

type Props = {};

const MainPage: NextPage = (props: Props) => {
  return (
    <div>
      <Head>
        <title>LAVISH</title>
        <meta name="LAVISH" content="LAVISH home page, powered by Next.js" />
        <link rel="icon" href="/lavish.ico" />
      </Head>
    </div>
  );
};

export default MainPage;
