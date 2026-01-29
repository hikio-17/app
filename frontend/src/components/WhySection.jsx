import React from 'react';

const WhySection = () => {
  const benefits = [
    {
      icon: 'fas fa-award',
      title: 'Formula Eksklusif',
      description: 'Setiap aroma dirancang khusus dengan komposisi unik yang tidak akan Anda temukan di tempat lain'
    },
    {
      icon: 'fas fa-clock',
      title: 'Tahan Lama',
      description: 'Wangi bertahan hingga 8-12 jam, menemani aktivitas Anda dari pagi hingga malam'
    },
    {
      icon: 'fas fa-user-tie',
      title: 'Karakter Maskulin',
      description: 'Dirancang khusus untuk pria dengan karakter kuat dan percaya diri'
    },
    {
      icon: 'fas fa-leaf',
      title: 'Bahan Premium',
      description: 'Menggunakan essential oil berkualitas tinggi untuk hasil terbaik'
    }
  ];

  return (
    <section className="why-section" data-testid="why-section">
      <div className="container">
        <h2 className="section-title" data-testid="why-title">Mengapa Men Parfume?</h2>
        <p className="section-subtitle" data-testid="why-subtitle">
          Kami tidak hanya menjual parfum. Kami menawarkan identitas yang melekat pada diri Anda.
        </p>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div className="benefit-card" key={index} data-testid={`benefit-card-${index}`}>
              <div className="benefit-icon">
                <i className={benefit.icon}></i>
              </div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
