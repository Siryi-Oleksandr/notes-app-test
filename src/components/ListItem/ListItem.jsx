import React, { useContext } from 'react';
import { truncateTitle, truncateDesc } from '../../services/textService';
import { formatShortDate } from '../../services/dateService';
import {
  DescWrapper,
  Item,
  NoteDate,
  NoteDesc,
  NoteTitle,
} from './ListItem.styled';
import localeContext from '../../context/localeContext';
import { pallete } from '../../helpers/variables';

function ListItem({ note }) {
  const { id, date, title, description } = note;
  const LS_Context = useContext(localeContext);
  const { showNote, currentNote, isEmptyNotes } = LS_Context;

  // useEffect(() => {
  //   first;

  //   return () => {
  //     second;
  //   };
  // }, [showedNote]);

  // if (!showedNote) {
  //   return <p>no notes yet</p>;
  // }
  let isActiveNote = null;
  if (currentNote) {
    isActiveNote = id === currentNote.id;
  }

  return (
    <Item
      style={{
        backgroundColor: isActiveNote ? pallete.ligthGray : pallete.ligthWhite,
      }}
      onClick={() => showNote(note)}
    >
      <NoteTitle>{truncateTitle(title)}</NoteTitle>
      <DescWrapper>
        <NoteDesc>{formatShortDate(date)}</NoteDesc>
        <NoteDate>{truncateDesc(description)}</NoteDate>
      </DescWrapper>
    </Item>
  );
}

export default ListItem;
