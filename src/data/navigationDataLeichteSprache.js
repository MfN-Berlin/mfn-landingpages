import { mainNavData as deMainNavData, topNavLinks as deTopNavLinks } from './navigationData';

// Create a deep copy of the German navigation
const leichteSpracheNav = JSON.parse(JSON.stringify(deMainNavData));

// Update only the main menu URLs to point to leichte-sprache
Object.keys(leichteSpracheNav).forEach(key => {
  leichteSpracheNav[key].to = leichteSpracheNav[key].to.replace('/de/', '/leichte-sprache/');
});

// Create top nav links for leichte sprache
const topNavLinks = deTopNavLinks.map(link => ({
  ...link,
  to: link.to.replace('/de/', '/leichte-sprache/')
}));

export const mainNavData = leichteSpracheNav;
export { topNavLinks }; 