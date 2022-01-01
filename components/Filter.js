import React from 'react';
import { SearchIcon } from '@heroicons/react/outline';

export default function Filter({ value, onChange, handleKeyPress }) {
  return (
    <div className="relative mt-14 text-gray-100 focus-within:text-gray-100">
      <span className="absolute inset-y-0 left-5 flex items-center pl-2">
        <SearchIcon className="h-10 w-10 text-gray-500" />
      </span>
      <input
        type="search"
        name="search"
        className="bg-gray-800 p-6 pl-20 w-full rounded text-3xl font-medium outline-none focus:ring-2  focus:ring-blue-600 placeholder:text-gray-500"
        placeholder="Search for a company (e.g. Apple)"
        autoComplete="off"
        onChange={onChange}
        value={value}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
}
