import React, { useContext, useEffect, useState } from 'react';
import ListItem from '../ListItem/ListItem';
import { Aside } from './Sidebar.styled';
import localeContext from '../../context/localeContext';

function Sidebar() {
  const LS_Context = useContext(localeContext);
  const { notes, showNote } = LS_Context;
  // const [updatedNotes, setUpdatedNotes] = useState(notes);

  // useEffect(() => {
  //   setUpdatedNotes(notes);
  // }, [notes]);

  return (
    <Aside>
      <ul>
        {notes.map(note => (
          <ListItem key={note.id} note={note} />
        ))}
      </ul>
    </Aside>
  );
}

export default Sidebar;
