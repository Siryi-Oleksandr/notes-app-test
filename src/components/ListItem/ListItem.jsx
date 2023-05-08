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

// const date = 1683488657802;
// const title = 'Finish project onsectetur adipisicing elit. Ratione';
// const description =
//   'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione harum aque.';

function ListItem({ note }) {
  const { date, title, description } = note;
  const LS_Context = useContext(localeContext);
  const { showNote } = LS_Context;
  return (
    <Item onClick={() => showNote(note)}>
      <NoteTitle>{truncateTitle(title)}</NoteTitle>
      <DescWrapper>
        <NoteDesc>{formatShortDate(date)}</NoteDesc>
        <NoteDate>{truncateDesc(description)}</NoteDate>
      </DescWrapper>
    </Item>
  );
}

export default ListItem;
