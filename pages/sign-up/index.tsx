import type { NextPage } from 'next';
import Head from 'next/head';
import SectionOne from '../../containers/SectionOne';
import { signupObjOne } from '../../helpers/sign-up-data';

type Props = {};

const SignUp: NextPage = (props: Props) => {
  return (
    <div>
      <Head>
        <title>LAVISH | Sign Up</title>
        <meta name="LAVISH sign up page" content="Sign up on LAVISH.com" />
        <link rel="icon" href="/lavish.ico" />
      </Head>

      <main>
        <SectionOne {...signupObjOne} />
      </main>
    </div>
  );
};

export default SignUp;
