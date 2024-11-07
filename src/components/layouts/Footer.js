import React from 'react';
import { Link, withPrefix } from 'gatsby';

const FooterLink = ({ to, children, external = false }) => {
  const linkProps = external ? { href: to, target: "_blank", rel: "noopener noreferrer" } : { to };
  return (
    <li className="inline-block p-1 pl-7">
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
    className="text-gray-300 hover:text-white mx-2"
    title={title}
    aria-label={title}
  >
    <span className="font-icomoon text-[2.7em] text-Green-500">{icon}</span>
  </a>
);

const Footer = () => {
  return (
    <footer className="bg-Black-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav aria-label="Footer Navigation">
          <ul className="flex flex-wrap justify-center text-sm">
            <FooterLink to="/pressemitteilungen">Presse</FooterLink>
            <FooterLink to="/ueber-uns/news">News</FooterLink>
            <FooterLink to="https://www.naturkundemuseum-shop.de/" external>Shop</FooterLink>
            <FooterLink to="/datenschutzerklaerung">Datenschutzerklärung</FooterLink>
            <FooterLink to="#">Datenschutzeinstellungen</FooterLink>
            <FooterLink to="/erklaerung-zur-barrierefreiheit">Digitale Barrierefreiheit</FooterLink>
            <FooterLink to="/impressum">Impressum</FooterLink>
            <FooterLink to="http://eepurl.com/vsVBv" external>Newsletter</FooterLink>
            <FooterLink to="/ueber-uns/jobs-und-karriere">Jobs & Karriere</FooterLink>
          </ul>
        </nav>

        <nav aria-label="Social Media Links" className="flex justify-center mb-8">
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
              <h2 className="text-xl font-bold mb-2">Adresse</h2>
              <p className="text-sm text-white whitespace-nowrap">Invalidenstr. 43 · 10115 Berlin</p>
              <dl className="mt-2 text-sm">
                <div className="flex whitespace-nowrap">
                  <dt className="w-16">Tel</dt>
                  <dd>(030) 889140-8591</dd>
                </div>
                <div className="flex whitespace-nowrap">
                  <dt className="w-16">Fax</dt>
                  <dd>(030) 889140-8814</dd>
                </div>
                <div className="flex whitespace-nowrap">
                  <dt className="w-16">E-Mail</dt>
                  <dd>
                    <a href="mailto:info@mfn.berlin" className="text-Green-500 hover:text-white">
                      info@mfn.berlin
                    </a>
                  </dd>
                </div>
              </dl>
              <p className="mt-2 text-sm text-Black-700 whitespace-nowrap">
                museumfuernaturkunde.berlin
              </p>
            </address>

            <section>
              <h2 className="text-xl font-bold mb-2">Eintrittspreise</h2>
              <dl className="text-sm">
                <div className="flex whitespace-nowrap">
                  <dt className="w-24">Erwachsene</dt>
                  <dd>€ 11,00</dd>
                </div>
                <div className="flex whitespace-nowrap">
                  <dt className="w-24">Ermäßigt</dt>
                  <dd>€ 5,00</dd>
                </div>
              </dl>
              <p className="mt-2">
                <Link to="/museum/besuch-planen" className="text-Green-500 hover:text-white whitespace-nowrap text-sm">
                  Gruppenpreise und Weiteres
                </Link>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">Öffnungszeiten</h2>
              <dl className="text-sm">
                <div className="flex">
                  <dt className="w-40">Dienstag – Freitag</dt>
                  <dd>9.30 – 18.00 Uhr</dd>
                </div>
                <div className="flex">
                  <dt className="w-40">Wochenende und Feiertag</dt>
                  <dd>10.00 – 18.00 Uhr</dd>
                </div>
              </dl>
            </section>
          </div>
        </div>

        <section className="text-center mb-8">
          <h2 className="text-xl font-bold mb-2">Für Natur – Der Newsletter</h2>
          <form className="mx-auto flex justify-center">
            <input 
              type="email" 
              placeholder="E-Mail-Adresse" 
              className="w-[375px] inline-block p-2 mb-2 bg-Black-900 text-white border border-Black-700 text-sm" 
              required 
              aria-label="E-Mail-Adresse für Newsletter"
            />
            <button type="submit" className="h-[41px] ml-1 px-4 pt-1.5 pb-2 inline-flex justify-center items-center gap-2.5 transition-colors duration-200 ease-in-out focus:outline-none bg-Green-500 text-White-White hover:bg-Green-600 focus:bg-Green-500 focus:border-2 focus:border-Black-900 font-bold">
              Anmelden
            </button>
          </form>
          <p className="text-sm text-Black-700 mt-2">
            Mit Klick auf "Anmelden" bestätigen Sie unsere
            <Link to="/datenschutzerklaerung#newsletter" className="text-Black-700 hover:text-white ml-1">
              Datenschutzerklärung
            </Link>
          </p>
        </section>

        <div className="flex flex-col items-center text-center text-Black-700 mt-16 pt-16">
          <img
            src={withPrefix("/images/leibniz.svg")}
            alt="Leibniz-Institut für Evolutions- und Biodiversitätsforschung"
            className="w-20 h-20 mb-4"
          />
          <p className="text-sm max-w-full">
            Museum für Naturkunde Leibniz-Institut für Evolutions- und Biodiversitätsforschung
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
