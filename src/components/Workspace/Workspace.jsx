import React, { useContext, useState } from 'react';
import {
  NoteDate,
  NoteDesc,
  NoteDetailsWrapper,
  NoteTitle,
} from './Workspace.styled';
import { formatDate } from '../../services/dateService';
import AddNotesForm from '../AddNotesForm/AddNotesForm';
import localeContext from '../../context/localeContext';
import EditNotesForm from '../EditNotesForm/EditNotesForm';

function Workspace() {
  const L_Context = useContext(localeContext);
  const { showedNote, isAddNote, isEditNote } = L_Context;

  if (isEditNote) {
    return <EditNotesForm />;
  }

  if (isAddNote) {
    return <AddNotesForm />;
  }

  return (
    <NoteDetailsWrapper>
      <NoteDate>{formatDate(showedNote.date)}</NoteDate>
      <NoteTitle>{showedNote.title}</NoteTitle>
      <NoteDesc>{showedNote.description}</NoteDesc>
    </NoteDetailsWrapper>
  );
}

export default Workspace;
