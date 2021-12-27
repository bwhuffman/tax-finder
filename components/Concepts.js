import React from 'react';
import axios from 'axios';

export default function Concepts({ query }) {
  const [concepts, setConcepts] = React.useState(null);

  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    setConcepts(null);
    setError(null);

    // Get a company's XBRL disclosures
    axios
      .get(
        `https://data.sec.gov/api/xbrl/companyconcept/CIK${query}/us-gaap/AccountsPayableCurrent.json`,
      )
      .then((res) => {
        setConcepts(res.data);
        // console.log('concepts', res.data);
      })
      .catch((err) => {
        setError(err);
      });
  }, [query]);

  return <div></div>;
}
