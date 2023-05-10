import React, { useContext, useState } from 'react';
import ListItem from '../ListItem/ListItem';
import { Aside, BurgerMenu } from './Sidebar.styled';
import localeContext from '../../context/localeContext';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';

function Sidebar() {
  const L_Context = useContext(localeContext);
  const { notes } = L_Context;
  const [isShowSidebar, setIsShowSidebar] = useState(true);

  return (
    <>
      <BurgerMenu
        type="button"
        onClick={() => {
          setIsShowSidebar(prev => !prev);
        }}
      >
        {isShowSidebar ? <GrClose /> : <GiHamburgerMenu />}
      </BurgerMenu>
      <Aside
        style={{
          left: isShowSidebar ? 0 : -350,
        }}
      >
        <ul>
          {notes.map(note => (
            <ListItem key={note.id} note={note} />
          ))}
        </ul>
      </Aside>
    </>
  );
}

export default Sidebar;
