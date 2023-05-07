import React from 'react';
import { HeaderStyled } from './Header.styled';
import Controls from '../Controls/Controls';
import SearchBox from '../SearchBox/SearchBox';

function Header() {
  return (
    <HeaderStyled>
      <Controls />
      <SearchBox />
    </HeaderStyled>
  );
}

export default Header;
