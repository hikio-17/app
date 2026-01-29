import React, { useEffect, useState } from 'react';
import HeroSection from '@/components/HeroSection';
import WhySection from '@/components/WhySection';
import ProductList from '@/components/ProductList';
import SocialProof from '@/components/SocialProof';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { createClient } from 'contentful';

const client = createClient({
  space: 'f1pu5jc48pmb',
  accessToken: 'eHQCAUQ6cTN00gYyv-7_vecP4R5zemuOZd96Q6zHRes'
});

const LandingPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await client.getEntries({
          content_type: 'parfumes'
        });
        setProducts(response.items);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="landing-page">
      <HeroSection />
      <WhySection />
      <ProductList products={products} loading={loading} />
      <SocialProof />
      <CTASection />
      <Footer />
    </div>
  );
};

export default LandingPage;
