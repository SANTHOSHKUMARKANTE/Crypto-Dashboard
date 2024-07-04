import React from 'react';
import { CryptoProvider } from './Context/CryptoContext';
import CryptoList from './Components/CryptoList';
import SearchSort from './Components/SearchSort';

const App = () => {
  return (
    <CryptoProvider>
      <div>
        <h1>Crypto Dashboard</h1>
        <SearchSort />
        <CryptoList />
      </div>
    </CryptoProvider>
    
  );
};

export default App;
