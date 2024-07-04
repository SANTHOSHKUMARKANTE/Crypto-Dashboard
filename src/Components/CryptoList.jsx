import React, { useContext } from 'react';
import { CryptoContext } from '../Context/CryptoContext';

const CryptoList = () => {
  const { filteredData } = useContext(CryptoContext);

  return (
    <div>
      <h2>Cryptocurrency Data</h2>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>Market Cap</th>
            <th>Percentage %</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((crypto) => (
            <tr key={crypto.id}>
              <td><img src={crypto.image} alt={crypto.name} width="30" /></td>
              <td>{crypto.name}</td>
              <td>{crypto.symbol.toUpperCase()}</td>
              <td>${crypto.current_price.toLocaleString()}</td>
              <td>${crypto.market_cap.toLocaleString()}</td>
              <td>{crypto.price_change_percentage_24h.toFixed(2)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoList;
