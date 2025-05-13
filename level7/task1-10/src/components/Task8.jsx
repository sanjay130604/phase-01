

// src/components/SearchComponent.js
import React, { useState } from 'react';
import useDebounce from '../hooks/useDebounce';

const SearchComponent = () => {
  const [query, setQuery] = useState('');
  
  // Debounce the query with a delay of 500ms
  const debouncedQuery = useDebounce(query, 500);

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  // Example of how to use debouncedQuery in your API call
  // Use debouncedQuery to fetch data or trigger an action when the query changes
  useEffect(() => {
    if (debouncedQuery) {
      // Example of API call or action
      console.log(`Fetching data for: ${debouncedQuery}`);
    }
  }, [debouncedQuery]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleSearchChange}
        placeholder="Search..."
      />
      <p>Search query: {debouncedQuery}</p>
    </div>
  );
};

export default SearchComponent;
