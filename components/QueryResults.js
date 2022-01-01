import React from 'react';
import Link from 'next/link';
import { getFormattedCIK } from '../utils/helpers';

export default function QueryResults({ results }) {
  let displayLst = getDisplayList(results);
  let resultsCount = getResultsCount(results);

  function getResultsCount(res) {
    if (!res) return null;
    let count = res.length;
    if (count === 0) return 'No matches found';
    return String(count) + ' results';
  }

  function getDisplayList(res) {
    if (!res) return [];
    if (res.length > 10) return res.slice(0, 5);
    return res;
  }

  return (
    <section>
      <ul className="w-full bg-gray-800 rounded">
        {displayLst.map((company) => {
          return (
            <li
              key={String(company[0]) + company[2]}
              className="border-t-2 border-gray-900"
            >
              <Link href={'/companies/' + getFormattedCIK(company[0])}>
                <a className="flex justify-between px-6 py-4 hover:bg-gray-700 cursor-pointer">
                  <div>
                    <div>{company[1]}</div>
                    <div className="text-gray-400 italic font-medium text-sm pt-1">
                      CIK: #{getFormattedCIK(company[0])}
                    </div>
                  </div>
                  <div className="text-blue-400 italic font-medium text-sm pt-1">
                    <div className="text-blue-400 italic font-medium text-sm text-right">
                      {company[2]}
                    </div>
                    <div className="text-gray-400 italic font-medium text-sm pt-1  text-right">
                      {company[3]}
                    </div>
                  </div>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="text-right italic text-gray-300 font-semibold pt-2">
        {resultsCount}
      </div>
    </section>
  );
}
