import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import Button from '../elements/Button';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [cookieSettings, setCookieSettings] = useState({
    essential: true, // Always true and readonly
    tracking: false,
    media_youtube: false,
    media_podigee: false,
    misc: false, // For functional cookies
  });

  // Helper function to get current domain
  const getDomain = () => {
    const hostname = window.location.hostname;
    return hostname === 'localhost' ? hostname : '.museumfuernaturkunde.berlin';
  };

  // Helper function to check if a cookie exists
  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  };

  // Helper function to set a cookie
  const setCookie = (name, value) => {
    const domain = getDomain();
    const cookieString = `${name}=${value}; path=/; max-age=${365 * 24 * 60 * 60}${domain !== 'localhost' ? `; domain=${domain}` : ''}; SameSite=Strict`;
    document.cookie = cookieString;
    console.log('Setting cookie:', cookieString); // Debug log
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const existingConsent = getCookie('cookie-agreed');
    console.log('Existing consent:', existingConsent);

    if (!existingConsent) {
      setIsVisible(true);
      // Initialize with essential only
      setCookieSettings({
        essential: true, // Always true and readonly
        tracking: false,
        media_youtube: false,
        media_podigee: false,
        misc: false,
      });
    }
  }, []);

  const handleAcceptAll = () => {
    console.log('Accepting all cookies...');
    setCookie('cookie-agreed', '2');
    setCookie('cookie-agreed-categories', JSON.stringify(["essential","tracking","media_youtube","media_podigee","misc"]));
    setCookie('cookie-agreed-version', '2.0.0');
    setIsVisible(false);
  };

  const handleAcceptEssential = () => {
    console.log('Accepting essential cookies only...');
    setCookie('cookie-agreed', '0');
    setCookie('cookie-agreed-categories', JSON.stringify([["essential"]]));
    setIsVisible(false);
  };

  const handleSaveSettings = () => {
    console.log('Saving custom settings...');
    const enabledCategories = ['essential'];
    if (cookieSettings.tracking) enabledCategories.push('tracking');
    if (cookieSettings.media_youtube) enabledCategories.push('media_youtube');
    if (cookieSettings.media_podigee) enabledCategories.push('media_podigee');
    if (cookieSettings.misc) enabledCategories.push('misc');

    setCookie('cookie-agreed', '2');
    setCookie('cookie-agreed-categories', JSON.stringify(enabledCategories));
    setCookie('cookie-agreed-version', '2.0.0');
    setIsVisible(false);
  };

  const ToggleSwitch = ({ isActive, isReadOnly, onChange }) => (
    <button 
      className={`
        relative inline-block w-[53px] h-[30px] rounded-[20px] border-4 border-white
        transition-colors duration-300 outline-none p-0 box-content
        ${isActive ? 'bg-[#91bd0d]' : 'bg-[#dfedb5]'}
        ${isReadOnly ? 'cursor-not-allowed' : 'cursor-pointer'}
      `}
      onClick={() => !isReadOnly && onChange?.()}
      disabled={isReadOnly}
    >
      <span className="absolute right-[2px] mt-[4px] top-full uppercase text-[0.75em] whitespace-nowrap">
        {isActive ? 'Zugestimmt' : 'Abgelehnt'}
      </span>
      <span 
        className={`
          absolute w-[30px] h-[30px] rounded-full border border-[#666]
          transition-transform duration-300 left-0 bottom-0
          ${isActive ? 'translate-x-[23px]' : 'translate-x-0'}
          ${isActive && isReadOnly ? 'bg-[#f0f0f0]' : 'bg-white'}
        `}
      />
    </button>
  );

  const CookieServiceItem = ({ title, description, isActive, isReadOnly, onChange }) => (
    <div className="border-b pb-4">
      <div className="flex justify-between items-start">
        <div className="flex-grow pr-8">
          <h3 className="font-bold mb-2">{title}</h3>
          <p className="text-sm text-gray-600">
            {description}
          </p>
        </div>
        <div className="flex-shrink-0 mt-1">
          <ToggleSwitch 
            isActive={isActive}
            isReadOnly={isReadOnly}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );

  if (!isVisible) return null;

  return (
    <div className="mfn-cookie-banner fixed inset-0 bg-black/50 z-[100] overflow-y-auto py-8">
      <div className="min-h-screen flex items-center justify-center">
        <div className="mfn-cookie-banner__modal bg-white max-w-2xl w-full mx-4 rounded-lg shadow-xl my-auto">
          <div className="mfn-cookie-banner__inner p-6">
            {!showSettings ? (
              // Main View
              <div className="mfn-cookie-banner__content">
                <p className="text-sm text-gray-500 mb-2">Cookies</p>
                <h2 className="text-2xl font-bold mb-4">Datenschutzeinstellungen</h2>
                <div className="prose prose-sm mb-6">
                  <p>
                    Auf unserer Webseite nutzen wir Cookies und binden Inhalte Dritter wie z. B. Videos ein. 
                    Cookies dienen Ihnen dazu, das Anzeigen von Inhalten Dritter und das statistische Erfassen 
                    Ihres Besuches auf unserer Webseite zu erlauben. Außerdem ermöglichen Cookies essenzielle 
                    Funktionen der Webseite.
                    <br /><br />
                    Mehr dazu können Sie in unserer <Link to="/de/datenschutzerklaerung" className="text-[#91bd0d] hover:underline">Datenschutzerklärung</Link> nachlesen.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={() => setShowSettings(true)}
                    variant="primary"
                    text="Einstellungen"
                  />
                  <Button
                    onClick={handleAcceptEssential}
                    variant="primary"
                    text="Essenzielles akzeptieren"
                  />
                  <Button
                    onClick={handleAcceptAll}
                    variant="primary"
                    text="Alles akzeptieren"
                  />
                </div>
              </div>
            ) : (
              // Settings View
              <div className="mfn-cookie-banner__content">
                <div className="flex items-center mb-4">
                  <button 
                    onClick={() => setShowSettings(false)}
                    className="flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <span className="mr-2">←</span> zurück
                  </button>
                </div>
                <p className="text-sm text-gray-500 mb-2">Cookies</p>
                <h2 className="text-2xl font-bold mb-4">Datenschutzeinstellungen</h2>
                
                <div className="prose prose-sm mb-6">
                  <p>
                    Auf unserer Webseite nutzen wir Cookies und binden Inhalte Dritter wie z. B. Videos ein. 
                    Cookies dienen Ihnen dazu, das Anzeigen von Inhalten Dritter und das statistische Erfassen 
                    Ihres Besuches auf unserer Webseite zu erlauben. Außerdem ermöglichen Cookies essenzielle 
                    Funktionen der Webseite. Hier können Sie einstellen, welche Funktionen Sie zulassen.
                    <br /><br />
                    Mehr dazu können Sie in unserer <Link to="/de/datenschutzerklaerung" className="text-[#91bd0d] hover:underline">Datenschutzerklärung</Link> nachlesen.
                  </p>
                </div>
                
                {/* Cookie Settings */}
                <div className="space-y-6 mb-6">
                  <CookieServiceItem
                    title="Essenziell"
                    description="Diese Cookies sind notwendig, um die Webseite nutzen zu können."
                    isActive={true}
                    isReadOnly={true}
                  />
                  
                  <CookieServiceItem
                    title="Tracking"
                    description="Wir nutzen Matomo um das Nutzerverhalten in einer Statistik zu erfassen. Dies erlaubt uns das Nutzerverhalten zu analysieren, um unsere Webseite ständig zu verbessern."
                    isActive={cookieSettings.tracking}
                    isReadOnly={false}
                    onChange={() => setCookieSettings(prev => ({
                      ...prev,
                      tracking: !prev.tracking
                    }))}
                  />

                  <CookieServiceItem
                    title="Youtube"
                    description="Wir binden Inhalte von Youtube wie z. B. Videos auf unserer Webseite ein. Diese Inhalte ergänzen die Informationen auf der jeweiligen Seite. Wenn Sie diese Option aktivieren, wird ein Cookie gesetzt, mit dem Sie erlauben, dass automatisch Inhalte von Youtube geladen werden. Dadurch können personenbezogene Daten an Youtube übertragen werden, als würden Sie die Webseite von Youtube direkt besuchen."
                    isActive={cookieSettings.media_youtube}
                    isReadOnly={false}
                    onChange={() => setCookieSettings(prev => ({
                      ...prev,
                      media_youtube: !prev.media_youtube
                    }))}
                  />

                  <CookieServiceItem
                    title="Podigee"
                    description="Wir binden Inhalte von Podigee wie z. B. Podcasts auf unserer Webseite ein. Diese Inhalte ergänzen die Informationen auf der jeweiligen Seite. Wenn Sie diese Option aktivieren, wird ein Cookie gesetzt, mit dem Sie erlauben, dass automatisch Inhalte von Podigee geladen werden. Dadurch können personenbezogene Daten an Podigee übertragen werden, als würden Sie die Webseite von Podigee direkt besuchen."
                    isActive={cookieSettings.media_podigee}
                    isReadOnly={false}
                    onChange={() => setCookieSettings(prev => ({
                      ...prev,
                      media_podigee: !prev.media_podigee
                    }))}
                  />

                  <CookieServiceItem
                    title="Funktionale Cookies"
                    description="Diese Cookies ermöglichen es der Website, eine verbesserte Funktionalität und Personalisierung zu bieten (z. B. merken wir uns, wenn Sie Hinweise der Seite als gelesen markiert haben und zeigen sie nicht erneut an). Das deaktivieren beeinträchtigt die Funktionalität der Seite nicht."
                    isActive={cookieSettings.misc}
                    isReadOnly={false}
                    onChange={() => setCookieSettings(prev => ({
                      ...prev,
                      misc: !prev.misc
                    }))}
                  />
                </div>

                <div className="flex justify-end">
                  <Button
                    onClick={handleSaveSettings}
                    variant="primary"
                    text="Einstellungen übernehmen"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent; 