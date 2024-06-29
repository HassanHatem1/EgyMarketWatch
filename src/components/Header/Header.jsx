import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <h1 className="header__title">Egy Market Watch</h1>
        <p className="header__subtitle">Your go-to source for the latest in news, exchange rates, and gold prices.</p>
        <div className="header-container">
          <p id='news'>News</p>
          <p id='exchange'>Exchange Rates</p>
          <p id='goldprices'>Gold Prices</p>
        </div>
      </div>
    </header>
  );
};

export default Header;