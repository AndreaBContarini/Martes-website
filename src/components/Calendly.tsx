import { useEffect, useState } from 'react';

const CalendlyWidget = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!(window as any).Calendly) {
        setError(true);
      }
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  if (error) {
    return (
      <div className="text-center py-8">
        <p>Non è stato possibile caricare il calendario. Per favore ricarica la pagina o contattaci direttamente a info@martes-ai.com</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="text-center py-8">
        <p>Caricamento del calendario in corso...</p>
      </div>
    );
  }

  return (
    <div className="calendly-container">
      <h1 className="text-4xl font-bold text-center mb-8">Prenota una Chiamata</h1>
      <div 
        id="calendly-container"
        className="calendly-inline-widget"
        data-url="https://calendly.com/riccardobcontarini/30min"
        style={{ minWidth: '320px', height: '700px' }}
      />
    </div>
  );
};

export default CalendlyWidget; 