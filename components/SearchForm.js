
import { Searchbar } from 'react-native-paper';
import { useState } from 'react';

export default function SearchForm ({setSearch}){
  const [searchQuery, setSearchQuery] = useState('');

  function onChangeSearch(query) {
    setSearchQuery(query)
  }

  function handleSearch (){
    setSearch(searchQuery)
  }

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      onSubmitEditing={handleSearch}
    />
  );
};
