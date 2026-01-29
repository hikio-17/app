import React from 'react';

const SocialProof = () => {
  const testimonials = [
    {
      name: 'Rizki Pratama',
      role: 'Marketing Manager',
      avatar: 'RP',
      rating: 5,
      comment: 'Wanginya beda dari yang lain! Saya pakai ke kantor dan banyak yang nanya parfum apa. Tahan seharian dan tidak menyengat. Recommended!'
    },
    {
      name: 'Ahmad Fauzi',
      role: 'Entrepreneur',
      avatar: 'AF',
      rating: 5,
      comment: 'Pertama kali coba langsung jatuh cinta. Aromanya maskulin tapi nggak berlebihan. Cocok banget buat meeting sama klien.'
    },
    {
      name: 'Budi Santoso',
      role: 'Content Creator',
      avatar: 'BS',
      rating: 5,
      comment: 'Sudah 3 bulan pakai Men Parfume dan jadi signature scent saya. Banyak viewers yang notice dan nanya. Worth the price!'
    }
  ];

  return (
    <section className="social-proof-section" data-testid="social-proof-section">
      <div className="container">
        <h2 className="section-title" data-testid="testimonial-title">Kata Mereka Yang Sudah Mencoba</h2>
        <p className="section-subtitle" data-testid="testimonial-subtitle">
          Ribuan pria telah menemukan signature scent mereka bersama Men Parfume
        </p>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index} data-testid={`testimonial-card-${index}`}>
              <div className="testimonial-header">
                <div className="avatar" data-testid={`avatar-${index}`}>{testimonial.avatar}</div>
                <div className="testimonial-info">
                  <h4 className="testimonial-name" data-testid={`testimonial-name-${index}`}>{testimonial.name}</h4>
                  <p className="testimonial-role" data-testid={`testimonial-role-${index}`}>{testimonial.role}</p>
                </div>
              </div>
              <div className="rating" data-testid={`rating-${index}`}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
              <p className="testimonial-comment" data-testid={`testimonial-comment-${index}`}>"{testimonial.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
