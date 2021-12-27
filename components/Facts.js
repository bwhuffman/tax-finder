import React from 'react';
import { getNumberWithCommas } from '../utils/helpers';

export default function Facts({ facts }) {
  const renderUnits = (units) => {
    const item = units?.USD?.pop();

    if (!item)
      return <p className="pt-4 italic text-slate-400">Nothing to report</p>;

    return (
      <div className="pt-4">
        <p className="text-sm uppercase text-slate-700 font-bold">
          Last Report
        </p>
        <div className="flex space-x-3 pt-2">
          {/* <p>Total Entries: {units?.USD.length}</p> */}
          <p className="inline-block rounded-min text-slate-700 bg-slate-100 px-2 py-1 text-xs font-bold">
            FY{item.fy}
          </p>
          <p className="inline-block rounded-min text-slate-700 bg-slate-100 px-2 py-1 text-xs font-bold">
            {item.form}
          </p>
          <p className="inline-block rounded-min text-slate-700 bg-slate-100 px-2 py-1 text-xs font-bold">
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
                <p className="text-slate-900 font-bold">{info.label}</p>
                <p className="text-slate-700">{info.description}</p>
                <ul>{renderUnits(info?.units)}</ul>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
