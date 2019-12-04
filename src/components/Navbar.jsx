import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

const Navbar = (props) => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <select name="coin" style={{marginRight: '2rem'}}>
          {
            props.coinList.map((coin, index) => (
              <option key={index} value={coin}>{coin}</option>
            ))
          }
        </select>
        <div className="dark-mode__toggle">
          <div
            onClick={toggleMode}
            className={darkMode ? 'toggle toggled' : 'toggle'}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
