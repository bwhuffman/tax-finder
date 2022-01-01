import React from 'react';

export default function Logo({ className = '', ...props }) {
  return (
    <span className={'text-2xl font-black text-gray-100 ' + className}>
      TaxFindr.
    </span>
  );
}
