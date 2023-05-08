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
  const { showNote, showedNote } = LS_Context;

  const isActiveNote = id === showedNote.id;

  return (
    <Item
      style={{
        backgroundColor: isActiveNote ? pallete.ligthGray : 'transparent',
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
