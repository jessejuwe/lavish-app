import type { NextPage } from 'next';
import Head from 'next/head';
import SectionOne from '../../containers/SectionOne';
import { servicesObjOne } from '../../helpers/services-data';

type Props = {};

const Services: NextPage = (props: Props) => {
  return (
    <div>
      <Head>
        <title>LAVISH | Services</title>
        <meta name="LAVISH services" content="LAVISH services and many more" />
        <link rel="icon" href="/lavish.ico" />
      </Head>

      <main>
        <SectionOne {...servicesObjOne} />
      </main>
    </div>
  );
};

export default Services;
