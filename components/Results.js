import React from 'react';
import axios from 'axios';
import Facts from './Facts';

// Results should never be called unless a CIK exists from lookup
export default function Results({ query }) {
  const [state, setState] = React.useState({
    status: 'idle',
    data: null,
    error: null,
  });

  React.useEffect(() => {
    // set to idle on every new query change
    setState({ status: 'idle', data: null, error: null });

    // if nothing in query, don't call API
    if (!query) return;

    // reset state
    setState({ status: 'pending', data: null, error: null });

    // Get a company's facts
    axios
      .get(`https://data.sec.gov/api/xbrl/companyfacts/CIK${query}.json`)
      .then((res) => {
        setState({ status: 'resolved', data: res.data });
      })
      .catch((err) => {
        setState({ status: 'rejected', error: err.message });
      });
  }, [query]);

  switch (state.status) {
    case 'idle':
      return <p>Search for a company</p>;
    case 'pending':
      return <p>Loading</p>;
    case 'rejected':
      return <p>An error occurred: {state.error}</p>;
    case 'resolved':
      return <Facts facts={state.data.facts['us-gaap']} />;
    default:
      return <p>This should never happen. Contact support.</p>;
  }
}
