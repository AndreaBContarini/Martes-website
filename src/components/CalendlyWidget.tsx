import React, { useState, useEffect } from 'react';

function CalendlyWidget() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const scriptId = "calendly-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = () => setIsLoaded(true);
      script.onerror = () => setHasError(true);
      document.body.appendChild(script);
    } else {
      setIsLoaded(true);
    }
  }, []); // Rimosso isLoaded dalle dipendenze per evitare loop

  if (hasError) {
    return (
      <div className="py-20 flex flex-col items-center justify-center p-8">
        <h3 className="text-xl font-semibold mb-4">Impossibile caricare il calendario</h3>
        <p className="mb-4">Puoi prenotare direttamente dal nostro Calendly:</p>
        <a
          href="https://calendly.com/riccardobcontarini/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#274f36] hover:bg-[#1a3524] text-white px-6 py-3 rounded-lg inline-block"
        >
          Prenota su Calendly
        </a>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="py-20 flex items-center justify-center">
        <p className="text-lg">Caricamento Calendly in corso...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 flex items-center justify-center bg-gray-100">
      <div
        className="calendly-inline-widget"
        // Tentativo di rimuovere lo sfondo (trasparenza)
        data-url="https://calendly.com/riccardobcontarini/30min?background_color=00000000"
        style={{
          width: "100%",
          minWidth: "1000px", // Forza a due colonne, se lo schermo è abbastanza largo
          height: "800px",
          background: "transparent"
        }}
      />
    </div>
  );
}

export default CalendlyWidget;
