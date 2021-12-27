import companies from '../data/company_tickers.json';

// return array of
function filterDataByName(query) {
  const filteredQuery = companies.data.filter(
    (item) =>
      item[1].toLowerCase().includes(query.toLowerCase()) ||
      item[2].toLowerCase().includes(query.toLowerCase()),
  );

  console.log(filteredQuery);
  return filteredQuery;
}

// Get the CIK, company name, ticker, and exchange from json
function getNameData(query) {
  const res = companies.data.filter((el) => el[1] === query);

  // if no exact match, return null
  if (res.length < 1) return null;

  return {
    name: res[0][1],
    ticker: res[0][2],
    cik: String(res[0][0]).padStart(10, '0'), // must be 10 digit string
    exchange: res[0][3],
  };
}

// add commas to large numbers
function getNumberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export { filterDataByName, getNameData, getNumberWithCommas };
