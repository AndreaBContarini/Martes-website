import { useEffect } from 'react';

// Dichiarazione per TypeScript
declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: any;
  }
}

const CustomTranslate = () => {
  // Inizializza Google Translate in modo nascosto
  useEffect(() => {
    // Rimuovi script precedenti per evitare duplicazioni
    document.querySelectorAll('script[src*="translate.google.com"]').forEach(el => el.remove());
    
    // Aggiungi stili per nascondere gli elementi del widget
    const style = document.createElement('style');
    style.innerHTML = `
      /* Nascondi il widget principale ma mantieni la funzionalità */
      #google_translate_element {
        position: absolute;
        top: -9999px;
        left: -9999px;
        height: 0;
        visibility: hidden;
        overflow: hidden;
      }
      
      /* Nascondi barra superiore di Google Translate */
      .goog-te-banner-frame {
        display: none !important;
        visibility: hidden !important;
      }
      
      body {
        top: 0 !important;
      }
      
      /* Nascondi popup non necessari */
      .skiptranslate, .goog-tooltip {
        display: none !important;
      }
      
      /* Rimuovi evidenziazione del testo tradotto */
      .goog-text-highlight {
        background: none !important;
        box-shadow: none !important;
      }
    `;
    document.head.appendChild(style);
    
    // Crea e aggiungi il contenitore nascosto
    if (!document.getElementById('google_translate_element')) {
      const translateDiv = document.createElement('div');
      translateDiv.id = 'google_translate_element';
      document.body.appendChild(translateDiv);
    }
    
    // Inizializza Google Translate
    window.googleTranslateElementInit = () => {
      try {
        new window.google.translate.TranslateElement({
          pageLanguage: 'it',
          includedLanguages: 'it,en', // Solo italiano e inglese
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false
        }, 'google_translate_element');
        
        console.log('Google Translate inizializzato in modalità nascosta');
      } catch (error) {
        console.error('Errore durante l\'inizializzazione di Google Translate:', error);
      }
    };
    
    // Carica lo script di Google Translate
    const script = document.createElement('script');
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.head.appendChild(script);
    
    return () => {
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);
  
  // Componente vuoto che non renderizza nulla
  return null;
};

export default CustomTranslate; 