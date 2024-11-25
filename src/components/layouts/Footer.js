import React, { useState } from 'react';
import { Link, withPrefix } from 'gatsby';
import CookieConsent from '../features/CookieConsent';
import { getLanguageFromPath } from '../../scripts/languageManager';
import { featureTranslations } from '../../data/featureTranslations';

const FooterLink = ({ to, children, external = false, onClick }) => {
  const linkProps = external 
    ? { href: to, target: "_blank", rel: "noopener noreferrer" } 
    : { to, onClick };
  
  return (
    <li className="inline-block p-1 py-[0.5em] px-[1em] ml-1">
      {external ? (
        <a {...linkProps} className="text-Green-500 hover:text-white text-sm">{children}</a>
      ) : (
        <Link {...linkProps} className="text-Green-500 hover:text-white text-sm">{children}</Link>
      )}
    </li>
  );
};

const SocialLink = ({ href, icon, title }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-gray-300 hover:text-white mx-0 tracking-[0.8em]"
    title={title}
    aria-label={title}
  >
    <span className="font-icomoon text-[2.5em] text-Green-500">{icon}</span>
  </a>
);

const Footer = () => {
  const [showCookieSettings, setShowCookieSettings] = useState(false);
  const language = getLanguageFromPath(typeof window !== 'undefined' ? window.location.pathname : '');
  const t = featureTranslations.footer?.[language] || {};

  const paths = {
    press: `/${language}/${language === 'en' ? 'press-releases' : 'pressemitteilungen'}`,
    news: `/${language}/${language === 'en' ? 'about/news' : 'museum/medien/news'}`,
    privacyPolicy: `/${language}/${language === 'en' ? 'general-privacy-notice' : 'datenschutzerklaerung'}`,
    accessibility: `/${language}/${language === 'en' ? 'declaration-accessibility' : 'erklaerung-zur-barrierefreiheit'}`,
    imprint: `/${language}/${language === 'en' ? 'imprint' : 'impressum'}`,
    jobsAndCareer: `/${language}/${language === 'en' ? 'about/jobs-and-career' : 'ueber-uns/jobs-und-karriere'}`
  };

  return (
    <>
      <footer className="bg-Black-900 text-white">
        <div className="max-w-[1165px] mx-auto px-4 sm:px-[6px] lg:px-[12px] py-12">
          <nav aria-label="Footer Navigation">
            <ul className="flex flex-wrap justify-center text-sm">
              <FooterLink to={paths.press}>{t.links?.press || 'Press'}</FooterLink>
              <FooterLink to={paths.news}>{t.links?.news || 'News'}</FooterLink>
              <FooterLink to="https://www.naturkundemuseum-shop.de/" external>{t.links?.shop || 'Shop'}</FooterLink>
              <FooterLink to={paths.privacyPolicy}>{t.links?.privacyPolicy || 'Privacy Policy'}</FooterLink>
              <FooterLink 
                to="#" 
                onClick={(e) => {
                  e.preventDefault();
                  setShowCookieSettings(true);
                }}
              >
                {t.links?.privacySettings || 'Privacy Settings'}
              </FooterLink>
              <FooterLink to={paths.accessibility}>{t.links.accessibility}</FooterLink>
              <FooterLink to={paths.imprint}>{t.links.imprint}</FooterLink>
              <FooterLink to="http://eepurl.com/vsVBv" external>{t.links.newsletter}</FooterLink>
              <FooterLink to={paths.jobsAndCareer}>{t.links.jobsAndCareer}</FooterLink>
            </ul>
          </nav>

          <nav aria-label="Social Media Links" className="flex justify-center my-8">
            <SocialLink 
              href="https://www.instagram.com/mfnberlin" 
              icon="" 
              title="Instagram"
            />
            <SocialLink 
              href="https://www.twitter.com/mfnberlin" 
              icon="" 
              title="Twitter"
            />
            <SocialLink 
              href="https://www.tiktok.com/@mfnberlin?lang=de" 
              icon="" 
              title="TikTok"
            />
            <SocialLink 
              href="https://www.facebook.com/MfN.Berlin" 
              icon="" 
              title="Facebook"
            />
            <SocialLink 
              href="https://www.linkedin.com/company/mfnberlin" 
              icon="" 
              title="LinkedIn"
            />
            <SocialLink 
              href="https://www.youtube.com/user/MfNBerlin" 
              icon="" 
              title="YouTube"
            />
          </nav>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 mb-8">
              <address className="not-italic">
                <h2 className="text-sm font-bold mb-0">{t.address.title}</h2>
                <p className="text-sm text-white whitespace-nowrap">Invalidenstr. 43 · 10115 Berlin</p>
                <dl className="mt-0 text-sm">
                  <div className="flex whitespace-nowrap">
                    <dt className="w-16">{t.address.phone}</dt>
                    <dd>(030) 889140-8591</dd>
                  </div>
                  <div className="flex whitespace-nowrap">
                    <dt className="w-16">{t.address.fax}</dt>
                    <dd>(030) 889140-8814</dd>
                  </div>
                  <div className="flex whitespace-nowrap">
                    <dt className="w-16">{t.address.email}</dt>
                    <dd>
                      <a href="mailto:info@mfn.berlin" className="text-Green-500 hover:text-white">
                        info@mfn.berlin
                      </a>
                    </dd>
                  </div>
                </dl>
              </address>

              <section>
                <h2 className="text-sm font-bold mb-0">{t.prices.title}</h2>
                <dl className="text-sm">
                  <div className="flex whitespace-nowrap">
                    <dt className="w-24">{t.prices.adult}</dt>
                    <dd>€ 11,00</dd>
                  </div>
                  <div className="flex whitespace-nowrap">
                    <dt className="w-24">{t.prices.reduced}</dt>
                    <dd>€ 5,00</dd>
                  </div>
                </dl>
                <p className="mt-2">
                  <Link to={`/${language}/museum/besuch-planen`} className="text-Green-500 hover:text-white whitespace-nowrap text-sm">
                    {t.prices.groupPrices}
                  </Link>
                </p>
              </section>

              <section>
                <h2 className="text-sm font-bold mb-0">{t.openingHours.title}</h2>
                <dl className="text-sm">
                  <div className="flex">
                    <dt className="w-40">{t.openingHours.weekdays}</dt>
                    <dd>9.30 – 18.00 Uhr</dd>
                  </div>
                  <div className="flex">
                    <dt className="w-40">{t.openingHours.weekend}</dt>
                    <dd>10.00 – 18.00 Uhr</dd>
                  </div>
                </dl>
              </section>
            </div>
          </div>

          <section className="text-center mb-8">
            <h2 className="text-sm font-bold mb-4">{t.newsletterSignup?.title || 'Newsletter'}</h2>
            <form 
              action="https://berlin.us6.list-manage.com/subscribe/post?u=7cc783779868ff99f465accff&amp;id=6742162bdf" 
              method="post" 
              target="_blank"
              className="max-w-[375px] mx-auto"
            >
              <div className="flex">
                <input 
                  type="email" 
                  name="EMAIL"
                  placeholder={t.newsletterSignup?.emailPlaceholder || 'Email address'} 
                  className="flex-1 p-2 mb-2 bg-Black-900 text-white border border-Black-700 text-sm" 
                  required 
                />
                <button 
                  type="submit"
                  className="h-[41px] ml-1 px-4 pt-1.5 pb-2 inline-flex justify-center items-center gap-2.5 transition-colors duration-200 ease-in-out focus:outline-none bg-Green-500 text-White-White hover:bg-Green-600 focus:bg-Green-500 focus:border-2 focus:border-Black-900 font-bold"
                >
                  {t.newsletterSignup?.subscribe || 'Subscribe'}
                </button>
              </div>
              <p className="text-sm text-Black-700 mt-2">
                {t.newsletterSignup?.privacyNote || 'By clicking "Subscribe" you accept our'}{' '}
                <Link 
                  to={`/${language}/datenschutzerklaerung#newsletter`} 
                  className="text-Black-700 hover:text-white"
                >
                  {t.newsletterSignup?.privacyLink || 'Privacy Policy'}
                </Link>
              </p>
            </form>
          </section>

          <div className="flex flex-col items-center text-center text-Black-700 mt-16 pt-16">
            <img
              src={withPrefix("/images/leibniz.svg")}
              alt={t.instituteName || "Museum für Naturkunde Leibniz-Institut für Evolutions- und Biodiversitätsforschung"}
              className="w-20 h-20 mb-4"
            />
            <p className="text-sm max-w-full">
              {t.instituteName || "Museum für Naturkunde Leibniz-Institut für Evolutions- und Biodiversitätsforschung"}
            </p>
          </div>
        </div>
      </footer>

      <CookieConsent 
        forceOpen={showCookieSettings}
        onClose={() => setShowCookieSettings(false)}
      />
    </>
  );
};

export default Footer;
