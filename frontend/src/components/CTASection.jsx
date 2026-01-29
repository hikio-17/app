import React from 'react';

const CTASection = () => {
  const handleCTA = () => {
    const message = encodeURIComponent('Halo, saya ingin order parfum dari Men Parfume. Bisa dibantu?');
    window.open(`https://wa.me/6287778086123?text=${message}`, '_blank');
  };

  return (
    <section className="cta-section" data-testid="cta-section">
      <div className="cta-content">
        <h2 className="cta-title" data-testid="cta-title">
          Saatnya Temukan Wangi Yang Mewakili Diri Anda
        </h2>
        <p className="cta-subtitle" data-testid="cta-subtitle">
          Jangan biarkan kesan pertama Anda berlalu begitu saja.
          Pesan sekarang dan dapatkan wangi yang berkarakter.
        </p>
        <button 
          className="cta-button" 
          onClick={handleCTA}
          data-testid="cta-button"
        >
          <i className="fab fa-whatsapp"></i>
          Chat WhatsApp Sekarang
        </button>
        <p className="cta-guarantee" data-testid="cta-guarantee">
          <i className="fas fa-shield-alt"></i> 100% Original & Bergaransi
        </p>
      </div>
    </section>
  );
};

export default CTASection;
