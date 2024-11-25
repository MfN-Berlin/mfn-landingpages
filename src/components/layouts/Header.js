import React, { useState } from 'react';
import { Link, withPrefix } from 'gatsby';
import { generateUrl, getEnvironmentConfig } from '../../scripts/urlHelper';
import { LANGUAGES, getLanguageFromPath, switchLanguagePath, getNavigationData } from '../../scripts/languageManager';
import { getTranslatedUrl } from '../../data/urlMappings';
import { Location } from '@reach/router';

// Component for top navigation links
const TopNavLink = ({ to, children, isSpecial = false }) => (
  <li className="inline-block p-0 my-1 ml-[1.12rem] first:ml-0">
    {to.startsWith('http') ? (
      <a
        href={to}
        className={`text-Black-900 hover:text-Green-500 transition duration-3000 no-underline text-[12.6px] ${
          isSpecial ? "bg-Green-400 text-Black-900 px-[0.9em] py-[0.1em] pb-[0.2em] align-middle font-bold uppercase hover:text-White-White focus:text-White-White" : ""
        }`}
      >
        {children}
      </a>
    ) : (
      <Link
        to={generateUrl(to)}
        className={`text-Black-900 hover:text-Green-500 transition duration-3000 no-underline text-[12.6px] ${
          isSpecial ? "bg-Green-400 text-Black-900 px-[0.9em] py-[0.1em] pb-[0.2em] align-middle font-bold uppercase hover:text-White-White focus:text-White-White" : ""
        }`}
      >
        {children}
      </Link>
    )}
  </li>
);

// Submenu item component
const SubmenuItem = ({ item }) => (
  <div className="menu-namu-taxonomy-menu__submenu-item mb-6">
    {item.to.startsWith('http') ? (
      <a 
        href={item.to}
        className="block text-sm text-left text-gray-900 font-bold hover:text-Green-500 transition duration-300"
      >
        {item.label}
      </a>
    ) : (
      <Link 
        to={generateUrl(item.to)}
        className="block text-sm text-left text-gray-900 font-bold hover:text-Green-500 transition duration-300"
      >
        {item.label}
      </Link>
    )}
    {item.submenu && (
      <ul className="mt-2 space-y-2 border-l border-gray-200 pl-4">
        {item.submenu.map((subItem) => (
          <li key={`${item.to}-subitem-${subItem.to}`}>
            {subItem.to.startsWith('http') ? (
              <a 
                href={subItem.to}
                className="block text-sm text-gray-600 hover:text-Green-500 transition duration-300"
              >
                {subItem.label}
              </a>
            ) : (
              <Link 
                to={generateUrl(subItem.to)}
                className="block text-sm text-gray-600 hover:text-Green-500 transition duration-300"
              >
                {subItem.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    )}
  </div>
);

// Main navigation item (without dropdown container)
const MainNavItem = ({ section, isActive, onMouseEnter, currentPath }) => {
  const currentLang = getLanguageFromPath(currentPath);
  const url = currentLang === LANGUAGES.EN ? 
    section.to.replace(/^\/de\//, '/en/') : 
    section.to;

  return (
    <button 
      className="menu-item"
      onMouseEnter={() => onMouseEnter(section.to)}
      type="button"
    >
      <Link
        to={url}
        className={`whitespace-nowrap uppercase text-[#1a1a1a] align-middle font-bold tracking-[0.03em] inline-block text-[max(min(1.5vw,20px),12px)] px-[min(0.5vw,0.5em)] box-border hover:text-White-White focus:text-White-White transition duration-300 mx-[5px] ${
          isActive ? 'bg-Green-500 text-Black-900' : 'hover:bg-Green-500'
        }`}
      >
        <span className="inline-block py-[0.1em] pb-[0.2em] px-[min(1vw,0.5em)]">
          {section.label}
        </span>
      </Link>
    </button>
  );
};

// Logo component using publicURL for SVG
const Logo = () => (
  <div className="flex-shrink-0 w-[156px]">
    <div className="mfn-system-branding-block max-w-[calc(100vw-13px)] md:absolute bg-white md:top-[12px] pl-[1px] pr-[2px] top-[13px]">
      <Link to="/" className="block outline-none text-[#7da30b] transition duration-3000">
        <img
          src={withPrefix('/images/logo.svg')}
          alt="Museum für Naturkunde Berlin"
          className="block z-[var(--z-index-logo)] bg-[var(--color-background-logo)] px-[0.7em] h-[84px] m-0 sm:sticky sm:top-0 sm:h-[var(--height-branding-logo)]"
        />
      </Link>
    </div>
  </div>
);

// Search form component
const SearchForm = () => (
  <div className="" role="search">
    <input type="checkbox" id="mfn-search-field" className="peer hidden" />
    <label htmlFor="mfn-search-field" className="cursor-pointer">
      <span className="font-icomoon text-[min(5.8vw,2em)] block h-[24px] leading-[0.7]"></span>
    </label>
    <div className="hidden peer-checked:block absolute left-0 right-0 top-full bg-white py-16 text-center z-[199] height-[42px]">
      <form action="/de/search" method="get" id="views-exposed-form-mfn-search-page-1" acceptCharset="UTF-8" className="inline-block">
        <div className="mb-4 inline-block">
          <label htmlFor="edit-query" className="block text-left">Zu suchende Schlüsselwörter</label>
          <input
            placeholder="z.B. &quot;Tristan&quot; oder &quot;Alexander von Humboldt&quot;"
            type="text"
            id="edit-query"
            name="query"
            className="pl-8 w-[min(30em,calc(90vw-5rem))] h-[2.3em] bg-no-repeat bg-[url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWlkIiB2ZXJzaW9uPSIxLjEiIGlkPSJFYmVuZV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgMzAgMzAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMwIDMwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qxe2ZpbGw6IzFEMUQxQjt9Cgkuc3Qye2ZpbGw6I0ExQzAyNDt9Cgkuc3Qze2ZpbGw6IzUyNTI1Mjt9Cgkuc3Q0e2ZpbGw6I0YwRjBGMDt9Cgkuc3Q1e2ZpbGw6IzczNDcwMDt9Cgkuc3Q2e2ZpbGw6IzE2MDA3Mzt9Cgkuc3Q3e2ZpbGw6IzIzMUYyMDt9Cgkuc3Q4e2ZpbGw6I0NDQ0NDQzt9Cjwvc3R5bGU+CjxwYXRoIGNsYXNzPSJzdDgiIGQ9Ik0xNy40LDEzLjVjMCwyLjEtMS43LDMuNy0zLjcsMy43Yy0yLjEsMC0zLjcsMS43LTMuNywzLjdjMC0yLjEsMS43LTMuNywzLjctMy43QzE1LjcsOS44LDE3LjQsMTEuNSwxNy40LDEzLjUKCSBNMTguNywxNy4xYzAuNy0xLDEuMi0yLjMsMS4yLTMuNmMwLTMuNC0yLjgtNi4yLTYuMi02LjJzLTYuMiwyLjgtNi4yLDYuMnMyLjgsNi4yLDYuMiw2LjJjMS4yLDAsMi4zLTAuNCwzLjMtMC45bDQsMy45bDEuNy0xLjgKCUwxOC43LDE3LjF6Ii8+Cjwvc3ZnPgo=)] text-sm border border-gray-200 rounded-none shadow-[inset_1px_1px_1px_0px_#ccc] focus:outline-none"
          />
        </div>
        <div className="inline-block">
          <input
            type="submit"
            id="edit-submit-mfn-search"
            value="Suche"
            className="h-[2.3em] px-4 py-2 bg-[#7da30b] text-black-900 text-sm border-none rounded-none shadow-none cursor-pointer hover:bg-[#91bd0d] focus:outline-none pt-[6px] ml-[5px]"
          />
        </div>
      </form>
    </div>
  </div>
);

// Language switcher component
const LanguageSwitcher = ({ currentPath }) => {
  console.log('LanguageSwitcher currentPath:', currentPath);
  
  // Remove the path prefix for language detection
  const pathForLangDetection = currentPath?.replace('/mfn-landingpages', '');
  const currentLang = getLanguageFromPath(pathForLangDetection);
  
  console.log('currentLang:', currentLang);
  
  const getTargetPath = (targetLang) => {
    console.log('getTargetPath called with:', { currentPath, targetLang });
    if (!currentPath) return `/${targetLang}/`;
    
    // Remove any existing prefix before translation
    const pathWithoutPrefix = currentPath.replace('/mfn-landingpages', '');
    const translatedPath = getTranslatedUrl(pathWithoutPrefix, targetLang);
    
    // Add prefix only if we're on GitHub Pages
    const { hostname } = getEnvironmentConfig();
    return hostname === 'mfn-berlin.github.io' 
      ? `/mfn-landingpages${translatedPath}`
      : translatedPath;
  };
  
  return (
    <div className="language-switcher-language-url hidden sm:block" role="navigation">
      <ul className="flex m-0 items-center leading-[0]">
        <li className={`de list-none typography-p font-tradegothic-bold border-r-2 border-Gray-300 ${currentLang === LANGUAGES.DE ? 'active' : ''}`}>
          <Link 
            to={getTargetPath(LANGUAGES.DE)} 
            className={`language-link px-3 inline-block leading-none ${currentLang === LANGUAGES.DE ? 'text-Green-500' : 'text-Black-900'}`} 
            hrefLang="de"
          >
            DE
          </Link>
        </li>
        <li className={`en list-none typography-p font-tradegothic-bold ${currentLang === LANGUAGES.EN ? 'active' : ''}`}>
          <Link 
            to={getTargetPath(LANGUAGES.EN)} 
            className={`language-link px-3 inline-block leading-none ${currentLang === LANGUAGES.EN ? 'text-Green-500' : 'text-Black-900'}`} 
            hrefLang="en"
          >
            EN
          </Link>
        </li>
      </ul>
    </div>
  );
};

// Main Header component with centralized submenu management
const Header = ({ activeNavItem, location }) => {
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const currentLang = getLanguageFromPath(location?.pathname);
  
  // Get the correct navigation data based on language
  const { topNavLinks: currentTopNavLinks, mainNavData: currentMainNavData } = 
    getNavigationData(currentLang);

  // Find active section data
  const getActiveSectionData = () => {
    const currentLang = getLanguageFromPath(location?.pathname);
    const { mainNavData: currentMainNavData } = getNavigationData(currentLang);
    
    return Object.values(currentMainNavData).find(
      section => section.to === activeSubmenu
    );
  };

  return (
    <>
      {/* TopNav */}
      <nav className="hidden md:block bg-white">
        <div className="max-w-[1165px] mx-auto px-3">
          <ul className="flex justify-end py-2">
            {currentTopNavLinks.map((link) => (
              <TopNavLink
                key={link.to}
                to={link.to}
                isSpecial={link.isSpecial}
              >
                {link.label}
              </TopNavLink>
            ))}
          </ul>
        </div>
      </nav>

      {/* Logo Section */}
      <div className="relative md:sticky md:top-[20px] bg-white z-[51]">
        <div className="relative max-w-[1165px] mx-auto pl-[12px] pr-[12px]">
          <div className="md:absolute md:top-[-34px] w-full flex justify-center md:w-auto">
            <Logo />
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav 
        className="sticky top-0 z-50 bg-white/95 relative"
        role="navigation"
        aria-label="Main Navigation"
      >
        <div 
          className="navigation-wrapper"
          onMouseLeave={() => setActiveSubmenu(null)}
          role="menubar"
          tabIndex={0}
        >
          <div className="max-w-[1165px] mx-auto md:pl-[156px] pr-3">
            <div className="flex items-center justify-between h-auto py-[7px] md:px-0 pr-[12px]">
              <div className="flex flex-wrap justify-start">
                {Object.entries(currentMainNavData).map(([key, section]) => (
                  <MainNavItem
                    key={key}
                    section={section}
                    isActive={activeNavItem === key}
                    onMouseEnter={() => setActiveSubmenu(section.to)}
                    currentPath={location?.pathname}
                  />
                ))}
              </div>
              <div className="flex items-center justify-end space-x-4 ml-4 md:ml-10">
                <SearchForm />
                <LanguageSwitcher currentPath={location?.pathname} />
              </div>
            </div>

            {/* Centralized submenu container */}
            {activeSubmenu && getActiveSectionData() && (
              <div className="menu-namu-taxonomy-menu__submenu-container absolute left-0 w-screen min-h-[12em] bg-white max-h-[calc(100vh-var(--height-menu)-var(--height-menu-border))] overflow-y-auto">
                <div className="menu-namu-taxonomy-menu__submenu pl-[180px] pt-[1.5em] pb-[1.5em] px-[12px]">
                  <div className="max-w-[1165px] mx-auto" style={{ columns: '280px auto', columnGap: '1em' }}>
                    {getActiveSectionData().submenuColumns
                      .sort((a, b) => a.column - b.column)
                      .map((column, columnIndex) => (
                        <div 
                          key={`${activeSubmenu}-column-${column.column}-${columnIndex}`} 
                          className="break-inside-avoid-column"
                        >
                          {column.items
                            .sort((a, b) => a.order - b.order)
                            .map((item) => (
                              <SubmenuItem 
                                key={`${activeSubmenu}-item-${item.to}`} 
                                item={item} 
                              />
                            ))}
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

// Make sure Header is wrapped with proper location info when exported
export default function HeaderWithLocation(props) {
  return (
    <Location>
      {({ location }) => <Header {...props} location={location} />}
    </Location>
  );
}
