import React from 'react';
import { getNumberWithCommas } from '../utils/helpers';

export default function Facts({ facts }) {
  const renderUnits = (units) => {
    const item = units?.USD?.pop();

    if (!item)
      return <p className="pt-4 italic text-gray-500">Nothing to report</p>;

    return (
      <div className="pt-4">
        <p className="text-sm uppercase text-gray-300 font-bold">Last Report</p>
        <div className="flex space-x-3 pt-2">
          {/* <p>Total Entries: {units?.USD.length}</p> */}
          <p className="inline-block rounded-min text-gray-300 bg-gray-800 px-2 py-1 text-xs font-semibold">
            FY{item.fy}
          </p>
          <p className="inline-block rounded-min text-gray-300 bg-gray-800 px-2 py-1 text-xs font-semibold">
            {item.form}
          </p>
          <p className="inline-block rounded-min text-gray-300 bg-gray-800 px-2 py-1 text-xs font-semibold">
            ${getNumberWithCommas(item.val)}
          </p>
          {/* <p>start: {item.start}</p>
            <p>end: {item.end}</p> */}
        </div>
      </div>
    );
  };

  return (
    <div>
      <ul>
        {facts &&
          Object.entries(facts).map(([key, info]) => {
            return (
              <li key={key} className="border-t-2 py-4">
                <p className="font-bold">{info.label}</p>
                <p className="text-gray-400">{info.description}</p>
                <ul>{renderUnits(info?.units)}</ul>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
