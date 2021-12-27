import Head from 'next/head';
import React from 'react';
import Results from '../components/Results';
import Footer from '../components/Footer';
import Filter from '../components/Filter';
import { getNameData } from '../utils/helpers';
import data from '../data/company_tickers.json';

export default function Home() {
  const [cik, setCik] = React.useState('');
  const [query, setQuery] = React.useState('');
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    setCik('');
    setData(null);
    let res = getNameData(query);
    if (res) {
      setData(res);
      setCik(res.cik);
    }
  }, [query]);

  return (
    <React.Fragment>
      <Head>
        <title>Tax Finder</title>
        <meta
          name="description"
          content="Find and understand the taxes paid by US companies."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto my-10">
        <h1 className="text-3xl font-bold text-slate-900">Tax Finder</h1>
        <Filter value={query} onChange={(e) => setQuery(e.target.value)} />
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-slate-700">
            {data ? query : `${query} not found`}
          </h2>
          <p className="text-slate-700">CIK: #{cik}</p>
        </div>
        <Results query={cik} />
        {/* <Companies /> */}
      </main>

      <Footer />
    </React.Fragment>
  );
}
