import React from 'react';

export default function Badge({ className = '', children = '' }) {
  return (
    <span
      className={
        'bg-blue-600 text-white p-1 px-2 rounded text-xs uppercase font-semibold ' +
        className
      }
    >
      {children}
    </span>
  );
}
