import React from 'react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="w-full py-6 text-gray-400">
      <div className="flex flex-wrap items-end justify-between px-3 md:px-11">
        <div className="space-y-2">
          {/* <Logo className="text-xl" /> */}
          <p className="text-gray-400">
            Built for the people from publicly available data.
          </p>
          <p>
            <a className="text-blue-500">
              Bennett Huffman &copy; {new Date().getFullYear()}
            </a>
          </p>
        </div>
        <div className="space-y-2">
          <p>
            <a className="text-right text-blue-500">
              Report an issue or provide feedback
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
