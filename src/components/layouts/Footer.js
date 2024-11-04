import React from 'react';
import { Link, withPrefix } from 'gatsby';

const FooterLink = ({ to, children, external = false }) => {
  const linkProps = external ? { href: to, target: "_blank", rel: "noopener noreferrer" } : { to };
  return (
    <li className="inline-block p-1 pl-7">
      {external ? (
        <a {...linkProps} className="text-Green-500 hover:text-white">{children}</a>
      ) : (
        <Link {...linkProps} className="text-Green-500 hover:text-white">{children}</Link>
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
  >
    <span className="font-icomoon text-[2.7em] text-Green-500">{icon}</span>
  </a>
);

const Footer = () => {
  return (
    <footer className="bg-Black-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <ul className="flex flex-wrap justify-center">
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

        <div className="flex justify-center mb-8">
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
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 mb-8 text-sm">
            <div>
              <h2 className="font-bold mb-2">Adresse</h2>
              <p className="text-white whitespace-nowrap">Invalidenstr. 43 · 10115 Berlin</p>
              <div className="mt-2">
                <div className="flex whitespace-nowrap"><span className="w-16">Tel</span><span>(030) 889140-8591</span></div>
                <div className="flex whitespace-nowrap"><span className="w-16">Fax</span><span>(030) 889140-8814</span></div>
                <div className="flex whitespace-nowrap"><span className="w-16">E-Mail</span><a href="mailto:info@mfn.berlin" className="text-Green-500 hover:text-white">info@mfn.berlin</a></div>
              </div>
              <p className="mt-2 text-Black-700 whitespace-nowrap">museumfuernaturkunde.berlin</p>
            </div>

            <div>
              <h2 className="font-bold mb-2">Eintrittspreise</h2>
              <div className="flex whitespace-nowrap"><span className="w-24">Erwachsene</span><span>€ 11,00</span></div>
              <div className="flex whitespace-nowrap"><span className="w-24">Ermäßigt</span><span>€ 5,00</span></div>
              <p className="mt-2">
                <Link to="/museum/besuch-planen" className="text-Green-500 hover:text-white whitespace-nowrap">
                  Gruppenpreise und Weiteres
                </Link>
              </p>
            </div>

            <div>
              <h2 className="font-bold mb-2">Öffnungszeiten</h2>
              <div className="flex whitespace-nowrap"><span className="w-40">Dienstag – Freitag</span><span>9.30 – 18.00 Uhr</span></div>
              <div className="flex whitespace-nowrap"><span className="w-40">Wochenende und Feiertag</span><span>10.00 – 18.00 Uhr</span></div>
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-sm font-bold mb-2">Für Natur – Der Newsletter</h2>
          <form className="mx-auto flex justify-center">
            <input type="email" placeholder="E-Mail-Adresse" className="w-[375px] inline-block p-2 mb-2 bg-Black-900 text-white border border-Black-700" required />
            <button type="submit" className="h-[41px] ml-1 px-4 pt-1.5 pb-2 inline-flex justify-center items-center gap-2.5 typography-p transition-colors duration-200 ease-in-out focus:outline-none bg-Green-500 text-White-White hover:bg-Green-600 focus:bg-Green-500 focus:border-2 focus:border-Black-900">Anmelden</button>
          </form>
          <p className="text-Black-700 mt-2 text-sm">
            Mit Klick auf "Anmelden" bestätigen Sie unsere
            <Link to="/datenschutzerklaerung#newsletter" className="text-Black-700 hover:text-white ml-1">
              Datenschutzerklärung
            </Link>
          </p>
        </div>

        <div className="flex flex-col items-center text-center text-Black-700 mt-16 pt-16">
          <img
            src={withPrefix("/images/leibniz.svg")}
            alt="Leibniz-Institut für Evolutions- und Biodiversitätsforschung"
            className="w-20 h-20 mb-4"
          />
          <p className="max-w-full">
            Museum für Naturkunde Leibniz-Institut für Evolutions- und Biodiversitätsforschung
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
