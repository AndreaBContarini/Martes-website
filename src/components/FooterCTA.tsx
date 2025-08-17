import React from 'react';

function FooterCTA() {
  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 w-full bg-black/20">
      <div className="container mx-auto px-4 text-center">
        <button 
          onClick={scrollToForm}
          className="bg-emerald-400 hover:bg-emerald-500 text-black px-12 py-4 rounded-full text-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-emerald-400/20 transform hover:-translate-y-1"
        >
          Collabora con noi
        </button>
      </div>
    </section>
  );
}

export default FooterCTA; 