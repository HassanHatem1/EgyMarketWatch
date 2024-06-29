import React, { useEffect, useState } from 'react';
import './gold.css';

const Goldprices = () => {
  const [goldPrices, setGoldPrice] = useState([]);

  useEffect(() => {
    const fetchGoldPrices = async () => {
      const headers = {
        'x-access-token': 'goldapi-6s0sly07cbuk-io',
        'Content-Type': 'application/json'
      };
      try {
        const response = await fetch('https://www.goldapi.io/api/XAU/EGP', { headers });
        const data = await response.json();
  
        // Update the state with different types of gold and their prices
        setGoldPrice([
          { type: '24K', price: `${data.price_gram_24k} EGP` },
          { type: '22K', price: `${data.price_gram_22k} EGP` },
          { type: '21K', price: `${data.price_gram_21k} EGP` },
          { type: '20K', price: `${data.price_gram_20k} EGP` },
          { type: '18K', price: `${data.price_gram_18k} EGP` },
          { type: '16K', price: `${data.price_gram_16k} EGP` },
          { type: '14K', price: `${data.price_gram_14k} EGP` },
          { type: '10K', price: `${data.price_gram_10k} EGP` },
        ]);
      } catch (error) {
        console.error('Error fetching gold prices:', error);
      }
    };
  
    fetchGoldPrices();
  }, []);
  return (
    <div className="gold-grid">
      {goldPrices.map((gold, index) => (
        <div key={index} className="gold-item">
          <p>Gold Type = {gold.type}</p>
          <p>{gold.price} Per Gram</p>
        </div>
      ))}
    </div>
  );
};

export default Goldprices;