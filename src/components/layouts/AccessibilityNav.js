import React from 'react';
import { Link } from 'gatsby';
import { getLanguageFromPath } from '../../scripts/languageManager';
import { featureTranslations } from '../../data/featureTranslations';
import { getAssetPath } from '../../scripts/assetPrefix';

const AccessibilityNav = ({ currentPage }) => {
  const language = getLanguageFromPath(typeof window !== 'undefined' ? window.location.pathname : '');
  const t = featureTranslations.accessibilityNav[language];

  return (
    <nav className="w-full min-h-[28px] flex flex-wrap justify-center md:justify-between items-center px-4 py-1 gap-4 md:gap-0">
      <div className="flex items-center gap-1.5 whitespace-nowrap">
        <Link 
          to="/" 
          className="text-Black-500 text-xs underline leading-[27px]"
        >
          {t.homepage}
        </Link>
        <span className="text-Black-500 text-xs leading-[27px]">
          {' > '}
          {currentPage}
        </span>
      </div>
      <div className="flex flex-wrap items-center justify-center md:justify-end gap-5">
        <a
          href={t.urls.signLanguage}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5"
        >
          <img src={getAssetPath("/images/iconGebaerdensprache.png")} alt="" className="w-6 h-6" />
          <span className="text-Black-500 text-xs underline leading-[27px] whitespace-nowrap">
            {t.signLanguage}
          </span>
        </a>
        <a
          href={t.urls.easyLanguage}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5"
        >
          <img src={getAssetPath("/images/iconLeichteSprache.png")} alt="" className="w-6 h-6" />
          <span className="text-Black-500 text-xs underline leading-[27px] whitespace-nowrap">
            {t.easyLanguage}
          </span>
        </a>
        <a
          href={t.urls.accessibility}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5"
        >
          <img src={getAssetPath("/images/iconBarrierefreiheit.png")} alt="" className="w-6 h-6" />
          <span className="text-Black-500 text-xs underline leading-[27px] whitespace-nowrap">
            {t.accessibility}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default AccessibilityNav;
