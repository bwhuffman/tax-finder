import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import Footer from '../components/Footer';
import Filter from '../components/Filter';
import { getDataByName, getDataByCIK } from '../utils/helpers';
import Header from '../components/Header';
import data from '../data/company_tickers.json';

export default function Home() {
  const router = useRouter();
  const [cik, setCik] = React.useState('');
  const [query, setQuery] = React.useState('');
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    setCik('');
    setData(null);
    let res = getDataByName(query);

    if (res) {
      setData(res);
      setCik(res.cik);
    }
  }, [query]);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();

      // if company exists, go to page
      if (data) {
        router.push('/companies/' + cik);
      }
      // TODO: display error message if company doesn't exist
    }
    return false;
  };

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

      <Header />
      <main className="container w-full mx-auto my-32 px-3 md:px-11">
        <div className="text-xl font-semibold text-blue-500 text-center">
          Discover what Fortune 500 corporations actually pay.
        </div>
        <h1 className="text-7xl font-black text-gray-100 text-center pt-5">
          What do they pay in taxes?
        </h1>
        <div className="lg:w-3/5 md:w-4/5 sm:w-full mx-auto">
          <Filter
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            handleKeyPress={handleKeyPress}
          />
          <div className="my-4">
            <h2 className="text-2xl font-bold text-gray-300">
              {data ? 'Found' : 'No match found'}
            </h2>
            <p className="text-gray-400">{data ? 'CIK: #' + cik : null}</p>
          </div>
        </div>
      </main>

      <Footer />
    </React.Fragment>
  );
}
