import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const CryptoContext = createContext();

const CryptoProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
          params: {
            vs_currency: 'usd',
            order: 'market_cap_desc',
            per_page: 10,
            page: 1,
            sparkline: false,
          },
        });
        setData(response.data);
        setFilteredData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    let result = data.filter(
      (crypto) =>
        crypto.name.toLowerCase().includes(search.toLowerCase()) ||
        crypto.symbol.toLowerCase().includes(search.toLowerCase())
    );

    if (sort === 'market_cap') {
      result = result.sort((a, b) => b.market_cap - a.market_cap);
    } else if (sort === 'percentage_change') {
      result = result.sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h);
    }

    setFilteredData(result);
  }, [search, sort, data]);

  return (
    <CryptoContext.Provider value={{ filteredData, setSearch, setSort }}>
      {children}
    </CryptoContext.Provider>
  );
};

export { CryptoContext, CryptoProvider };
