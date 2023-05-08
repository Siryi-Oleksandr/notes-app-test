import React, { useContext, useEffect, useState } from 'react';
import { IconWrapper, Input, SearchWrapper } from './SearchBox.styled';
import { GoSearch } from 'react-icons/go';
import { pallete } from '../../helpers/variables';
import localeContext from '../../context/localeContext';

function SearchBox() {
  const [search, setSearch] = useState('');

  const LS_Context = useContext(localeContext);
  const { setFilter } = LS_Context;

  useEffect(() => {
    setFilter(search);
  }, [search, setFilter]);

  const handleSearch = evt => {
    setSearch(evt.target.value);
  };

  return (
    <SearchWrapper>
      <Input value={search} onChange={handleSearch} placeholder="Search" />
      <IconWrapper>
        {search === '' && <GoSearch color={pallete.gray} />}
      </IconWrapper>
    </SearchWrapper>
  );
}

export default SearchBox;
