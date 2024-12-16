import React from 'react';
import { Link } from 'gatsby';
import { getLanguageFromPath } from '../../scripts/languageManager';
import { featureTranslations } from '../../data/featureTranslations';
import { getAssetPath } from '../../scripts/assetPrefix';
import Section from '../../components/elements/Section';


const AccessibilityNav = ({ currentPage }) => {
  const language = getLanguageFromPath(typeof window !== 'undefined' ? window.location.pathname : '');
  const t = featureTranslations.accessibilityNav[language];

  return (
    <section
      className={`w-full bg-Black-100 md:bg-white pt-0 md:pt-8`}
    >
      <div className={`grid 1fr grid-cols-[1fr_minmax(auto,_min(1165px,_100vw))_1fr]`}  >
        <div className={`col-start-2 col-end-3 px-3`}>
          <div className={`grid px-3 sm:px-12 xl:px-0 justify-items-center `}>
            <nav className="min-h-[28px] bg-[#f0f0f0] md:bg-white flex flex-wrap justify-center md:justify-between items-center w-full max-w-[1165px] mx-auto px-4 py-1 gap-1 md:gap-0">
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
              <div className="flex flex-wrap items-center justify-center md:justify-end gap-0 md:gap-5">
                <a
                  href={t.urls.signLanguage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-2"
                >
                  <img src={getAssetPath("/images/iconGebaerdensprache.png")} alt="" className="hidden md:block w-6 h-6" />
                  <span className="text-Black-500 text-xs underline leading-[27px] whitespace-nowrap">
                    {t.signLanguage}
                  </span>
                </a>
                <a
                  href={t.urls.easyLanguage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-2"
                >
                  <img src={getAssetPath("/images/iconLeichteSprache.png")} alt="" className="hidden md:block w-6 h-6" />
                  <span className="text-Black-500 text-xs underline leading-[27px] whitespace-nowrap">
                    {t.easyLanguage}
                  </span>
                </a>
                <a
                  href={t.urls.accessibility}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-2"
                >
                  <img src={getAssetPath("/images/iconBarrierefreiheit.png")} alt="" className="hidden md:block w-6 h-6" />
                  <span className="text-Black-500 text-xs underline leading-[27px] whitespace-nowrap">
                    {t.accessibility}
                  </span>
                </a>
              </div>
            </nav>

          </div>
        </div>
      </div>
    </section>


  );
};

export default AccessibilityNav;
