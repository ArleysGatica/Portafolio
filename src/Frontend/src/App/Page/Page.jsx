import React from 'react';
import { Header } from '../Components/Header/Header';

export const Page = (props) => {

  const { children } = props;
  return (
    <>
      <Header />
      {children}

    </>
  );
}
export default Page;