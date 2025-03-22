const logos = [
  {
    src: "https://i.ibb.co/nPq0dkr/PHOTO-2024-08-17-13-31-51-removebg-preview.png",
    alt: "We Travel Group"
  },
  {
    src: "https://i.ibb.co/7J3hBFy/fantozzi2-removebg-preview.png",
    alt: "Fantozzi & Associati"
  },
  {
    src: "https://i.ibb.co/BtPCmvC/ecommerceparts-removebg-preview.png",
    alt: "Ecommerceparts"
  },
  {
    src: "https://i.ibb.co/LpScFQN/citybeach.png",
    alt: "CityBeach Boardshop"
  },
  {
    src: "https://www.clinicaoculisticasantalucia.it/images/logo-mobile.png",
    alt: "Clinica Oculistica Santa Lucia"
  },
  {
    src: "https://i.ibb.co/KzNTDF0D/loffredo.jpg",
    alt: "Federico Loffredo"
  },
  {
    src: "https://www.viaggicarmen.com/wpunitravel/wp-content/uploads/2023/11/agenzia-viaggi-aprilia.png",
    alt: "Viaggi Carmen"
  }
];

function LogoTicker() {
  return (
    <section id="partners" className="py-12 w-full bg-black">
      <div className="section-container">
        <div className="ticker-container flex overflow-hidden whitespace-nowrap">
          <div
            className="ticker-content flex items-center"
            style={{
              display: "flex",
              animation: "marquee 40s linear infinite", // Durata aumentata
              width: "max-content"
            }}
          >
            {logos.concat(logos).map((logo, index) => (
              <div 
                key={`logo-${index}`}
                className="bg-white p-4 rounded-xl flex items-center justify-center shadow-lg transition-transform transform hover:scale-105"
                style={{
                  width: '200px',
                  height: '100px',
                  margin: '0 15px'
                }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stile per animazione più lenta */}
      <style>
        {`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}
      </style>
    </section>
  );
}

export default LogoTicker;
