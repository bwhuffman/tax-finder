import companies from '../data/company_tickers.json';

// return array of filtered search items
function filterDataByName(query) {
  // return if falsy
  if (!query) return;
  let lcQuery = query.toLowerCase();

  // run search query
  const filteredQuery = companies.data.filter((el) => {
    let [cik, name, ticker, exchange] = el;
    if (name && name.toLowerCase().includes(lcQuery)) return true;
    if (ticker && ticker.toLowerCase().includes(lcQuery)) return true;
    if (exchange && exchange.toLowerCase().includes(lcQuery)) return true;
    if (cik && cik.toString().toLowerCase().includes(lcQuery)) return true;
    return false;
  });
  return filteredQuery;
}

function getFormattedCIK(cik) {
  return String(cik).padStart(10, '0');
}

// Get the CIK, company name, ticker, and exchange from json
function getDataByName(query) {
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

function getDataByCIK(query) {
  const res = companies.data.filter((el) => el[0] === query);

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

export {
  filterDataByName,
  getDataByName,
  getDataByCIK,
  getNumberWithCommas,
  getFormattedCIK,
};
