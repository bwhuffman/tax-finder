import React from 'react';

export default function Filter({ value, onChange }) {
  return (
    <div className="my-9">
      <label
        className="block text-slate-700 text-sm font-bold mb-2"
        htmlFor="company"
      >
        CIK Input
      </label>
      <input
        className="border rounded py-2 px-3 text-slate-700 focus:outline-none focus:shadow-outline"
        id="company"
        type="text"
        placeholder="Company"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
