import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import Footer from '../components/Footer';
import Filter from '../components/Filter';
import QueryResults from '../components/QueryResults';
import { filterDataByName, getFormattedCIK } from '../utils/helpers';
import Header from '../components/Header';

export default function Home() {
  const router = useRouter();
  const [query, setQuery] = React.useState('');

  // derived state
  const queryResults = filterDataByName(query);
  const data = getCompanyIfExists(queryResults);
  const cik = getCompanyCIK(data);

  // check if company is only match
  function getCompanyIfExists(query) {
    if (!query) return null;
    if (query.length === 1) return query[0];
    return null;
  }

  // get company's CIK from
  function getCompanyCIK(data) {
    if (!data) return null;
    return getFormattedCIK(data[0]);
  }

  // EVENT HANDLERS
  const handleQuery = (e) => {
    setQuery(e.target.value);
  };

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
        <div className="xl:w-3/5 lg:w-4/5 sm:w-full mx-auto">
          <Filter
            value={query}
            onChange={handleQuery}
            handleKeyPress={handleKeyPress}
          />
          <QueryResults results={queryResults} />
        </div>
      </main>

      <Footer />
    </React.Fragment>
  );
}
