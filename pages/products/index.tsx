import type { NextPage } from 'next';
import Head from 'next/head';
import SectionOne from '../../containers/SectionOne';
import { productsObjOne } from '../../helpers/products-data';

type Props = {};

const Products: NextPage = (props: Props) => {
  return (
    <div>
      <Head>
        <title>LAVISH | Products</title>
        <meta name="LAVISH products" content="LAVISH products and many more" />
        <link rel="icon" href="/lavish.ico" />
      </Head>

      <main>
        <SectionOne {...productsObjOne} />
      </main>
    </div>
  );
};

export default Products;
