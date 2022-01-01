import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import Badge from './Badge';

export default function Header() {
  return (
    <header className="w-full py-6">
      <nav className="flex flex-wrap items-center justify-between px-3 md:px-11">
        <Link href="/">
          <a className="flex flex-wrap items-center space-x-3">
            <Logo />
            <Badge>Beta</Badge>
          </a>
        </Link>
        <ul className="flex flex-wrap">
          <li>
            <Link href="/faq">
              <a className="rounded-lg p-3 ml-2 text-gray-400 font-medium hover:bg-gray-800 hover:text-gray-200">
                FAQ
              </a>
            </Link>
          </li>
          <li>
            <Link href="/methodology">
              <a className="rounded-lg p-3 ml-2 text-gray-400 font-medium hover:bg-gray-800 hover:text-gray-200">
                Methodology
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
