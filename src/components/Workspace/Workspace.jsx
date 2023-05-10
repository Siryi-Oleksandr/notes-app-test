import React, { useContext } from 'react';
import {
  NoteDate,
  NoteDesc,
  NoteDetailsWrapper,
  NoteTitle,
} from './Workspace.styled';
import { formatDate } from '../../services/dateService';
import AddNotesForm from '../AddNotesForm/';
import localeContext from '../../context/localeContext';
import EditNotesForm from '../EditNotesForm/';
import { HaveNotNotes, IsNotChooseNotes } from '../HaveNotNotes/HaveNotNotes';
import Loader from '../Loader';

function Workspace() {
  const L_Context = useContext(localeContext);
  const { currentNote, isAddNote, isEditNote, isEmptyNotes, isLoading } =
    L_Context;

  if (isEditNote) {
    return <EditNotesForm />;
  }

  if (isAddNote) {
    return <AddNotesForm />;
  }

  if (isEmptyNotes) {
    return <HaveNotNotes />;
  }

  return (
    <>
      {!currentNote ? (
        <IsNotChooseNotes />
      ) : (
        <NoteDetailsWrapper>
          <NoteDate>{formatDate(currentNote.date)}</NoteDate>
          <NoteTitle>{currentNote.title}</NoteTitle>
          <NoteDesc>{currentNote.description}</NoteDesc>
        </NoteDetailsWrapper>
      )}
      {isLoading && <Loader />}
    </>
  );
}

export default Workspace;
