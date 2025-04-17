import React from 'react';
import { Link } from 'gatsby';
import { mainNavData } from '../data/navigationData';
import { mainNavDataEn } from '../data/navigationDataEn';
import { mainNavDataLeichteSprache } from '../data/navigationDataLeichteSprache';

const Navigation = () => {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  
  console.log('Current pathname:', pathname);
  
  const getNavigationData = () => {
    if (pathname.startsWith('/leichte-sprache')) {
      console.log('Using leichte sprache navigation');
      return mainNavDataLeichteSprache;
    } else if (pathname.startsWith('/en')) {
      console.log('Using English navigation');
      return mainNavDataEn;
    }
    console.log('Using German navigation');
    return mainNavData;
  };

  const navigationData = getNavigationData();
  console.log('Final navigation data:', navigationData);

  const getNavUrl = (to, isSubmenu = false) => {
    const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
    const isLeichteSprache = currentPath.startsWith('/leichte-sprache');
    
    // For main menu items, use leichte-sprache URLs if we're in leichte-sprache
    if (!isSubmenu && isLeichteSprache) {
      return to.replace('/de/', '/leichte-sprache/');
    }
    
    // For submenu items in leichte sprache, keep the original URLs
    if (isLeichteSprache) {
      return to;
    }
    
    return to;
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 relative" role="navigation" aria-label="Main Navigation">
      <div className="navigation-wrapper" role="navigation">
        <div className="max-w-[1165px] mx-auto md:pl-[156px] pr-3">
          <div className="flex items-center justify-between h-auto py-[7px] md:px-0 pr-[12px]">
            <div className="flex flex-wrap justify-center w-full sm:w-auto sm:justify-start">
              {Object.entries(navigationData).map(([key, item]) => (
                <button key={key} className="menu-item" type="button">
                  <Link
                    to={getNavUrl(item.to)}
                    className={`whitespace-nowrap uppercase text-[#1a1a1a] align-middle font-bold tracking-[0.03em] inline-block text-[max(min(1.5vw,20px),12px)] px-[min(0.5vw,0.5em)] box-border hover:text-White-White focus:text-White-White transition duration-300 mx-[5px] hover:bg-Green-500 ${
                      pathname === item.to ? 'bg-Green-500 text-Black-900' : ''
                    }`}
                  >
                    <span className="inline-block py-[0.1em] pb-[0.2em] px-[min(1vw,0.5em)]">
                      {item.label}
                    </span>
                  </Link>
                  {item.submenuColumns && (
                    <div className="submenu absolute top-full left-0 w-full bg-white shadow-lg hidden group-hover:block">
                      <div className="max-w-[1165px] mx-auto py-4">
                        <div className="grid grid-cols-4 gap-4">
                          {item.submenuColumns.map((column, index) => (
                            <div key={index} className="submenu-column">
                              {column.items.map((subItem) => (
                                <Link
                                  key={subItem.to}
                                  to={getNavUrl(subItem.to, true)}
                                  className="block py-2 px-4 hover:bg-Green-500 hover:text-White-White"
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </button>
              ))}
            </div>
            {/* ... rest of the navigation ... */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 