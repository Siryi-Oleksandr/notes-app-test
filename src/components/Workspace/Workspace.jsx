import React from 'react';
import {
  NoteDate,
  NoteDesc,
  NoteDetailsWrapper,
  NoteTitle,
} from './Workspace.styled';
import { formatDate } from '../../helpers/dateService';

const date = 1683488657802;
const title = 'Finish project';
const description =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione harum aque.';

function Workspace() {
  return (
    <NoteDetailsWrapper>
      <NoteDate>{formatDate(date)}</NoteDate>
      <NoteTitle>{title}</NoteTitle>
      <NoteDesc>{description}</NoteDesc>
    </NoteDetailsWrapper>
  );
}

export default Workspace;
