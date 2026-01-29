import React from 'react';

const HeroSection = () => {
  const handleCTA = () => {
    const message = encodeURIComponent('Halo, saya tertarik dengan parfum dari Men Parfume!');
    window.open(`https://wa.me/6287778086123?text=${message}`, '_blank');
  };

  return (
    <section className="hero-section" data-testid="hero-section">
      <div className="hero-content">
        <h1 className="hero-title" data-testid="hero-title">
          Wangi Yang Berkarakter,<br />
          Bukan Sekadar Aroma
        </h1>
        <p className="hero-subtitle" data-testid="hero-subtitle">
          Temukan parfum maskulin yang mencerminkan kepribadian Anda.
          Dibuat dengan formula eksklusif untuk pria sejati yang percaya diri.
        </p>
        <button 
          className="hero-cta" 
          onClick={handleCTA}
          data-testid="hero-cta-button"
        >
          <i className="fab fa-whatsapp"></i>
          Pesan Sekarang
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
