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

function Workspace() {
  const L_Context = useContext(localeContext);
  const { showedNote, isAddNote } = L_Context;

  return (
    <>
      {isAddNote ? (
        <AddNotesForm />
      ) : (
        <NoteDetailsWrapper>
          <NoteDate>{formatDate(showedNote.date)}</NoteDate>
          <NoteTitle>{showedNote.title}</NoteTitle>
          <NoteDesc>{showedNote.description}</NoteDesc>
        </NoteDetailsWrapper>
      )}
    </>
  );
}

export default Workspace;
