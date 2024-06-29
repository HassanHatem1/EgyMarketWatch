import React, { useState, useEffect } from 'react';
import './currency.css';

const Exchangerates = () => {
  const [exchangeRates, setExchangeRates] = useState([]);
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState('USD');

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
  const [isEgpToSelectedCurrency, setIsEgpToSelectedCurrency] = useState(true); // New state for conversion direction

  const handleConvert = () => {
    const selectedRate = exchangeRates.find(rate => rate.currency === selectedCurrency);
    if (!selectedRate) return; // Guard clause if selected currency rate is not found

    let result = 0;
    if (isEgpToSelectedCurrency) {
      result = amount * selectedRate.rate;
    } else {
      result = amount / selectedRate.rate;
    }
    setConvertedAmount(result.toFixed(2));
  };

  return (
    <div className="exchange-rates-container">
      {exchangeRates.length ? (
        <>
          {exchangeRates.map(({ currency, name, rate }) => (
            <div key={currency} className="exchange-rate-item">
              <p>{`(EGP/${currency})         ${name} `}</p>
              <p>{`Rate: ${1/rate.toFixed(4)}`}</p>
            </div>
          ))}
          <div className="conversion-tool">
            <h3 id="convert">Convert Currency</h3>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
            />
            <select
              value={selectedCurrency}
              onChange={(e) => setSelectedCurrency(e.target.value)}
            >
              {exchangeRates.map(({ currency, name }) => (
                <option key={currency} value={currency}>{`${name}`}</option>
              ))}
            </select>
            <div>
              <input
                type="radio"
                id="egpToSelected"
                name="conversionDirection"
                value="egpToSelected"
                checked={isEgpToSelectedCurrency}
                onChange={() => setIsEgpToSelectedCurrency(true)}
              />
              <label htmlFor="egpToSelected"> EGP to {selectedCurrency} </label>

              <input
                type="radio"
                id="selectedToEgp"
                name="conversionDirection"
                value="selectedToEgp"
                checked={!isEgpToSelectedCurrency}
                onChange={() => setIsEgpToSelectedCurrency(false)}
              />
              <label htmlFor="selectedToEgp"> {selectedCurrency} to EGP </label>
            </div>
            <button onClick={handleConvert}>Convert</button>
            <p>Converted Amount in {isEgpToSelectedCurrency ? selectedCurrency : 'EGP'} : {convertedAmount}</p>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Exchangerates;