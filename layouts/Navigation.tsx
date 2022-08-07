import React, { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

type Props = { children: ReactNode };

const Navigation: React.FC<Props> = props => {
  return (
    <div>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Navigation;
