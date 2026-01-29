import React from 'react';

const ProductList = ({ products, loading }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handleWhatsAppOrder = (productName) => {
    const message = encodeURIComponent(`Halo, saya tertarik dengan ${productName} dari Men Parfume. Bisa info lebih lanjut?`);
    window.open(`https://wa.me/6287778086123?text=${message}`, '_blank');
  };

  if (loading) {
    return (
      <section className="product-section" data-testid="product-section">
        <div className="container">
          <h2 className="section-title">Koleksi Kami</h2>
          <div className="loading-state">
            <i className="fas fa-spinner fa-spin"></i>
            <p>Memuat produk...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="product-section" data-testid="product-section">
      <div className="container">
        <h2 className="section-title" data-testid="product-title">Koleksi Kami</h2>
        <p className="section-subtitle" data-testid="product-subtitle">
          Pilih aroma yang sesuai dengan karakter Anda
        </p>
        <div className="product-grid">
          {products.map((product, index) => {
            const { name, description, price, category, image, featured } = product.fields;
            
            // Handle image URL
            const imageUrl = image?.fields?.file?.url ? `https:${image.fields.file.url}` : null;
            
            // Handle description - check if it's a string or object
            let descriptionText = '';
            if (typeof description === 'string') {
              descriptionText = description;
            } else if (description && typeof description === 'object') {
              // If it's a rich text object, try to extract text
              descriptionText = 'Premium quality fragrance';
            }

            return (
              <div className="product-card" key={product.sys.id} data-testid={`product-card-${index}`}>
                {imageUrl && (
                  <div className="product-image">
                    <img src={imageUrl} alt={name || 'Product'} />
                    {featured && (
                      <span className="badge-featured" data-testid={`badge-featured-${index}`}>
                        <i className="fas fa-star"></i> Featured
                      </span>
                    )}
                  </div>
                )}
                <div className="product-info">
                  {category && <span className="product-category" data-testid={`product-category-${index}`}>{category}</span>}
                  <h3 className="product-name" data-testid={`product-name-${index}`}>{name || 'Product'}</h3>
                  <p className="product-description" data-testid={`product-description-${index}`}>{descriptionText}</p>
                  <div className="product-footer">
                    <span className="product-price" data-testid={`product-price-${index}`}>{formatPrice(price || 0)}</span>
                    <button 
                      className="btn-order" 
                      onClick={() => handleWhatsAppOrder(name || 'Product')}
                      data-testid={`btn-order-${index}`}
                    >
                      <i className="fab fa-whatsapp"></i> Pesan
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
