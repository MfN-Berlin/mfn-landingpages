import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import Button from '../elements/Button';

const PreferenceManager = ({ forceOpen = false, onClose = () => {} }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    tracking: false,
    media_youtube: false,
    media_podigee: false,
    misc: false,
  });

  const getEnvironmentConfig = () => {
    if (typeof window === 'undefined') return {};
    
    const hostname = window.location.hostname;
    
    if (hostname === 'test.mfn.gcsdev.de') {
      return {
        domain: 'test.mfn.gcsdev.de',
        path: '/'
      };
    }
    
    if (hostname === 'mfn-berlin.github.io') {
      return {
        domain: hostname,
        path: '/mfn-landingpages/'
      };
    }
    
    if (hostname === 'www.museumfuernaturkunde.berlin') {
      return {
        domain: 'www.museumfuernaturkunde.berlin',
        path: '/'
      };
    }

    return {
      domain: hostname,
      path: '/'
    };
  };

  const savePreference = (name, value) => {
    const { domain, path } = getEnvironmentConfig();
    const expiryDate = new Date();
    expiryDate.setFullYear(expiryDate.getFullYear() + 2);

    document.cookie = `${name}=${value}; ` +
      `expires=${expiryDate.toUTCString()}; ` +
      `path=${path}; ` +
      `domain=${domain}; ` +
      'SameSite=Strict';
  };

  const getStoredPreference = (name) => {
    if (typeof window === 'undefined') return null;
    
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const existingPreference = getStoredPreference('cookie-agreed');
    if (!existingPreference) {
      setIsVisible(true);
      setPreferences({
        essential: true,
        tracking: false,
        media_youtube: false,
        media_podigee: false,
        misc: false,
      });
    }
  }, []);

  useEffect(() => {
    if (forceOpen) {
      setIsVisible(true);
      setShowSettings(true);
    }
  }, [forceOpen]);

  const handleClose = () => {
    setIsVisible(false);
    setShowSettings(false);
    onClose();
  };

  const handleAcceptAll = () => {
    savePreference('cookie-agreed', '2');
    savePreference('cookie-agreed-categories', JSON.stringify(["essential","tracking","media_youtube","media_podigee","misc"]));
    savePreference('cookie-agreed-version', '2.0.0');
    handleClose();
  };

  const handleAcceptEssential = () => {
    savePreference('cookie-agreed', '0');
    savePreference('cookie-agreed-categories', JSON.stringify([["essential"]]));
    handleClose();
  };

  const handleSaveSettings = () => {
    const enabledCategories = ['essential'];
    if (preferences.tracking) enabledCategories.push('tracking');
    if (preferences.media_youtube) enabledCategories.push('media_youtube');
    if (preferences.media_podigee) enabledCategories.push('media_podigee');
    if (preferences.misc) enabledCategories.push('misc');

    savePreference('cookie-agreed', '2');
    savePreference('cookie-agreed-categories', JSON.stringify(enabledCategories));
    savePreference('cookie-agreed-version', '2.0.0');
    handleClose();
  };

  const handleBackButton = () => {
    if (forceOpen) {
      handleClose();
    } else {
      setShowSettings(false);
    }
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
    <div className="fixed inset-0 bg-black/50 z-[100] overflow-y-auto py-8" role="dialog" aria-modal="true">
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white max-w-2xl w-full mx-4 rounded-lg shadow-xl my-auto">
          <div className="p-6">
            {!showSettings ? (
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
              <div className="mfn-cookie-banner__content">
                <div className="flex items-center mb-4">
                  <button 
                    onClick={handleBackButton}
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
                    isActive={preferences.tracking}
                    isReadOnly={false}
                    onChange={() => setPreferences(prev => ({
                      ...prev,
                      tracking: !prev.tracking
                    }))}
                  />

                  <CookieServiceItem
                    title="Youtube"
                    description="Wir binden Inhalte von Youtube wie z. B. Videos auf unserer Webseite ein. Diese Inhalte ergänzen die Informationen auf der jeweiligen Seite. Wenn Sie diese Option aktivieren, wird ein Cookie gesetzt, mit dem Sie erlauben, dass automatisch Inhalte von Youtube geladen werden. Dadurch können personenbezogene Daten an Youtube übertragen werden, als würden Sie die Webseite von Youtube direkt besuchen."
                    isActive={preferences.media_youtube}
                    isReadOnly={false}
                    onChange={() => setPreferences(prev => ({
                      ...prev,
                      media_youtube: !prev.media_youtube
                    }))}
                  />

                  <CookieServiceItem
                    title="Podigee"
                    description="Wir binden Inhalte von Podigee wie z. B. Podcasts auf unserer Webseite ein. Diese Inhalte ergänzen die Informationen auf der jeweiligen Seite. Wenn Sie diese Option aktivieren, wird ein Cookie gesetzt, mit dem Sie erlauben, dass automatisch Inhalte von Podigee geladen werden. Dadurch können personenbezogene Daten an Podigee übertragen werden, als würden Sie die Webseite von Podigee direkt besuchen."
                    isActive={preferences.media_podigee}
                    isReadOnly={false}
                    onChange={() => setPreferences(prev => ({
                      ...prev,
                      media_podigee: !prev.media_podigee
                    }))}
                  />

                  <CookieServiceItem
                    title="Funktionale Cookies"
                    description="Diese Cookies ermöglichen es der Website, eine verbesserte Funktionalität und Personalisierung zu bieten (z. B. merken wir uns, wenn Sie Hinweise der Seite als gelesen markiert haben und zeigen sie nicht erneut an). Das deaktivieren beeinträchtigt die Funktionalität der Seite nicht."
                    isActive={preferences.misc}
                    isReadOnly={false}
                    onChange={() => setPreferences(prev => ({
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

export default PreferenceManager; 