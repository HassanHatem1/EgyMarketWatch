import React, { useState, useEffect } from 'react';
import './currency.css';

const Exchangerates = () => {
  const [exchangeRates, setExchangeRates] = useState([]);

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const popularCurrencies = 'USD,EUR,GBP,JPY,CHF,AUD,CAD,SGD,HKD,NZD,SEK,DKK,NOK,RUB,INR,CNY,ZAR,MXN,BRL,TRY';
        const currencyNames = {
          USD: "US Dollar",
          EUR: "Euro",
          GBP: "British Pound",
          JPY: "Japanese Yen",
          CHF: "Swiss Franc",
          AUD: "Australian Dollar",
          CAD: "Canadian Dollar",
          SGD: "Singapore Dollar",
          HKD: "Hong Kong Dollar",
          NZD: "New Zealand Dollar",
          SEK: "Swedish Krona",
          DKK: "Danish Krone",
          NOK: "Norwegian Krone",
          RUB: "Russian Ruble",
          INR: "Indian Rupee",
          CNY: "Chinese Yuan Renminbi",
          ZAR: "South African Rand",
          MXN: "Mexican Peso",
          BRL: "Brazilian Real",
          TRY: "Turkish Lira",
        };
        const response = await fetch(`https://api.currencyapi.com/v3/latest?apikey=cur_live_FBP7fYJNkRIhKrAbEKwVQaW2shfyKVbz6xcekX8e&currencies=${popularCurrencies}&base_currency=EGP`);
        const data = await response.json();
        const ratesWithNames = Object.entries(data.data).map(([currency, rateInfo]) => ({
          currency,
          name: currencyNames[currency],
          rate: rateInfo.value
        }));
        setExchangeRates(ratesWithNames);
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
      }
    };

    fetchExchangeRates();
  }, []);

  return (
    <div className="exchange-rates-container">
      {exchangeRates.length ? (
        exchangeRates.map(({ currency, name, rate }) => (
          <div key={currency} className="exchange-rate-item">
            <p>{`${name} (${currency}/EGP)`}</p>
            <p>{1 / rate}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Exchangerates;