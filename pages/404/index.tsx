import type { NextPage } from 'next';
import Head from 'next/head';
import LoadingSpinner from '../../components/UI/LoadingSpinner';
import SectionOne from '../../containers/SectionOne';
import { productsObjOne } from '../../helpers/products-data';

type Props = {};

const Products: NextPage = (props: Props) => {
  return (
    <div>
      <Head>
        <title>404: This page could not be found</title>
        <meta
          name="LAVISH error page"
          content="404: This page could not be found"
        />
        <link rel="icon" href="/lavish.ico" />
      </Head>

      <main>
        <div className="not-found">
          <LoadingSpinner />
          <h1>404 | This page could not be found.</h1>
        </div>
      </main>
    </div>
  );
};

export default Products;
