import Head from 'next/head';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Methodology() {
  return (
    <React.Fragment>
      <Head>
        <title>Methodology | Tax Finder</title>
        <meta
          name="description"
          content="Find and understand the taxes paid by Fortune 500 companies."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="container mx-auto my-32">
        <h1 className="text-7xl font-black text-gray-100 text-center pt-5">
          Methodology
        </h1>
      </main>

      <Footer />
    </React.Fragment>
  );
}
