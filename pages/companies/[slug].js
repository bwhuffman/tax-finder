import Link from 'next/link';
import Head from 'next/head';
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Results from '../../components/Results';
import { getDataByCIK } from '../../utils/helpers';
import { ArrowLeftIcon } from '@heroicons/react/outline';

export default function Company({ cik, data }) {
  return (
    <React.Fragment>
      <Head>
        <title>{data?.name} | Tax Finder</title>
        <meta
          name="description"
          content="Find and understand the taxes paid by Fortune 500 companies."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="container mx-auto my-24">
        <Link href="/">
          <a className="flex space-x-3 mb-10">
            <ArrowLeftIcon className="text-gray-400 hover:text-gray-300 h-6 w-6" />
            <span className="text-gray-400 hover:text-gray-300 font-semibold">
              Search More Companies
            </span>
          </a>
        </Link>
        <span className="text-blue-400 uppercase">
          {data?.ticker} ({data?.exchange})
        </span>
        <h1 className="text-7xl font-black text-gray-100 pt-2">{data?.name}</h1>

        <div className="pt-14">
          <Results query={cik} />
        </div>
      </main>

      <Footer />
    </React.Fragment>
  );
}

// this gets called on every request
export async function getServerSideProps(context) {
  // Fetch data from external API
  //   const res = await fetch(`https://.../data`);
  //   const data = await res.json();

  let cik = context.params.slug;
  let data = getDataByCIK(Number(cik));

  // if (!data) {
  //   return {
  //     notFound: true,
  //   };
  // }

  return {
    props: { cik, data }, // will be passed to the page component as props
  };
}
