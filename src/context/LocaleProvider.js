import localeContext from './localeContext';
import React, { useEffect, useState } from 'react';
import data from '../notes.json';

// const notes = data;

function LocaleProvider({ children }) {
  // const DB = process.env.REACT_APP_DB ?? 'indexed';
  const [notes, setNotes] = useState(data || []);
  const [showedNote, setShowedNote] = useState(() => notes[0]); // TODO bad idea notes[0]
  const [isAddNote, setIsAddNote] = useState(false);
  const [isEditNote, setIsEditNote] = useState(false);
  const [filter, setFilter] = useState('');
  const [isEmptyNotes, setIsEmptyNotes] = useState(false);

  // TODO logic with change BD
  // if (DB.includes('quinta')) {
  //   console.log('run quinta code 😎');
  // } else {
  //   console.log('run indexed code 😍');
  // }

  console.log(notes.length);
  console.log('from Locale', isEmptyNotes);

  useEffect(() => {
    if (notes.length === 0) {
      setIsEmptyNotes(true);
    } else {
      setIsEmptyNotes(false);
    }
  }, [showedNote, notes]);

  const addNote = data => {
    setNotes(prev => [...prev, data]);
    setIsAddNote(false);
  };

  const editNote = data => {
    const index = notes.findIndex(note => note.id === data.id);
    if (index === -1) {
      alert('note was not found');
    }
    notes[index] = { ...data };
    setNotes(notes);
    setIsEditNote(false);
  };

  const deleteNote = () => {
    const actualNotes = notes.filter(note => note.id !== showedNote.id);
    setNotes(actualNotes);
  };

  const showNote = note => {
    setShowedNote(note);
  };

  const onClickAdd = () => {
    setIsAddNote(true);
  };

  const onClickEdit = () => {
    setIsEditNote(true);
  };

  const cancel = () => {
    setIsEditNote(false);
    setIsAddNote(false);
  };

  const filterList = notes => {
    const normalizedFilter = filter.toLocaleLowerCase();
    const visibleNotes = notes.filter(note =>
      note.title.toLocaleLowerCase().includes(normalizedFilter)
    );
    return visibleNotes;
  };

  return (
    <localeContext.Provider
      value={{
        addNote,
        notes: filterList(notes),
        showedNote,
        showNote,
        isAddNote,
        onClickAdd,
        setFilter,
        deleteNote,
        editNote,
        onClickEdit,
        isEditNote,
        cancel,
        isEmptyNotes,
      }}
    >
      {children}
    </localeContext.Provider>
  );
}

export default LocaleProvider;
