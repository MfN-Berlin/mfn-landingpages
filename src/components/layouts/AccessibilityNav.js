import React from 'react';
import { Link } from 'gatsby';
import { withPrefix } from 'gatsby';


const AccessibilityNav = ({ currentPage }) => {
  return (
    <nav className="w-full min-h-[28px] flex flex-wrap justify-center md:justify-between items-center px-4 py-1 gap-4 md:gap-0">
      <div className="flex items-center gap-1.5 whitespace-nowrap">
        <Link to="/" className="text-Black-500 text-xs underline leading-[27px]">
          Startseite
        </Link>
        <span className="text-Black-500 text-xs leading-[27px]">
          {' > '}
          {currentPage}
        </span>
      </div>
      <div className="flex flex-wrap items-center justify-center md:justify-end gap-5">
        <a
          href="https://www.youtube.com/watch?v=pUUvyoe0tpc"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5"
        >
          <img src={withPrefix("/images/iconGebaerdensprache.png")} alt="" className="w-6 h-6" />
          <span className="text-Black-500 text-xs underline leading-[27px] whitespace-nowrap">
            Gebärdensprache
          </span>
        </a>
        <a
          href="https://www.museumfuernaturkunde.berlin/leichte-sprache"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5"
        >
          <img src={withPrefix("/images/iconLeichteSprache.png")} alt="" className="w-6 h-6" />
          <span className="text-Black-500 text-xs underline leading-[27px] whitespace-nowrap">
            Leichte Sprache
          </span>
        </a>
        <a
          href="https://www.museumfuernaturkunde.berlin/leichte-sprache/museum/besuch-planen/barrierefreiheit"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5"
        >
          <img src={withPrefix("/images/iconBarrierefreiheit.png")}  alt="" className="w-6 h-6" />
          <span className="text-Black-500 text-xs underline leading-[27px] whitespace-nowrap">
            Barrierefreiheit
          </span>
        </a>
      </div>
    </nav>
  );
};

export default AccessibilityNav;
