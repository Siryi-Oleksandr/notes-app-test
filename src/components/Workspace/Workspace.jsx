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
  const { showedNote, isAddNote, isEditNote, isEmptyNotes, isLoading } =
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
      {!showedNote ? (
        <IsNotChooseNotes />
      ) : (
        <NoteDetailsWrapper>
          <NoteDate>{formatDate(showedNote.date)}</NoteDate>
          <NoteTitle>{showedNote.title}</NoteTitle>
          <NoteDesc>{showedNote.description}</NoteDesc>
        </NoteDetailsWrapper>
      )}
      {isLoading && <Loader />}
    </>
  );
}

export default Workspace;
