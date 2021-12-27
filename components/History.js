import React from 'react';
import axios from 'axios';

export default function History({ query }) {
  const [history, setHistory] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    setHistory(null);
    setError(null);

    // Get company's filing history
    axios
      .get(`https://data.sec.gov/submissions/CIK${query}.json`)
      .then((res) => {
        setHistory(res.data);
        // console.log('history', res.data);
      })
      .catch((err) => {
        setError(err);
      });
  }, [query]);

  return <div></div>;
}
