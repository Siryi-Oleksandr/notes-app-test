import React from 'react';
import ListItem from '../ListItem/ListItem';
import { Aside } from './Sidebar.styled';

function Sidebar() {
  return (
    <Aside>
      <ul>
        <ListItem />
        <ListItem />
        <ListItem />
      </ul>
    </Aside>
  );
}

export default Sidebar;
