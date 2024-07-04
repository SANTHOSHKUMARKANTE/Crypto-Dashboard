import React, { useContext } from 'react';
import { CryptoContext } from '../Context/CryptoContext';

const SearchSort = () => {
  const { setSearch, setSort } = useContext(CryptoContext);

  return (
    <div>
      <input
        type="text"
        placeholder="Search by Name or Symbol"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => setSort('market_cap')}>Sort by Market Cap</button>
      <button onClick={() => setSort('percentage_change')}>Sort by Percentage Change</button>
    </div>
  );
};

export default SearchSort;
