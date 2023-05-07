import React from 'react';
import { truncateTitle, truncateDesc } from '../../helpers/textService';
import { formatShortDate } from '../../helpers/dateService';
import {
  DescWrapper,
  Item,
  NoteDate,
  NoteDesc,
  NoteTitle,
} from './ListItem.styled';

const date = 1683488657802;
const title = 'Finish project onsectetur adipisicing elit. Ratione';
const description =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione harum aque.';

function ListItem() {
  return (
    <Item>
      <NoteTitle>{truncateTitle(title)}</NoteTitle>
      <DescWrapper>
        <NoteDesc>{formatShortDate(date)}</NoteDesc>
        <NoteDate>{truncateDesc(description)}</NoteDate>
      </DescWrapper>
    </Item>
  );
}

export default ListItem;
