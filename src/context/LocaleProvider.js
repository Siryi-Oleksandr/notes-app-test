import localeContext from './localeContext';
import React, { useEffect, useState } from 'react';
import data from '../notes.json';
import { addNotes, getNotes } from '../services/quintaApiService';

// const notes = data;

function LocaleProvider({ children }) {
  // const DB = process.env.REACT_APP_DB ?? 'indexed';
  const [notes, setNotes] = useState([]);
  const [showedNote, setShowedNote] = useState({}); // TODO bad idea notes[0]
  const [isAddNote, setIsAddNote] = useState(false);
  const [isEditNote, setIsEditNote] = useState(false);
  const [filter, setFilter] = useState('');
  const [isEmptyNotes, setIsEmptyNotes] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshNotes, setIsRefreshNotes] = useState(null);

  // TODO logic with change BD
  // if (DB.includes('quinta')) {
  //   console.log('run quinta code 😎');
  // } else {
  //   console.log('run indexed code 😍');
  // } form id : "afts1egG5nu4kcWPS5nCkz"

  useEffect(() => {
    setIsLoading(true);
    getNotes()
      .then(data => {
        const allNotes = data.map(note => ({
          id: note.id,
          title: note.values.title,
          description: note.values.description,
          date: Number(note.values.date),
        }));
        setNotes(allNotes);
        setShowedNote(allNotes[0]);
      })
      .catch(e => {
        setIsLoading(false);
        console.error(e.message);
      })
      .finally(() => setIsLoading(false));
  }, [isRefreshNotes]);

  useEffect(() => {
    if (notes.length === 0) {
      setIsEmptyNotes(true);
    } else {
      setIsEmptyNotes(false);
    }
  }, [showedNote, notes]);

  const addNote = data => {
    addNotes(data).then(setIsRefreshNotes(Date.now()));
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
        setIsRefreshNotes,
        isLoading,
      }}
    >
      {children}
    </localeContext.Provider>
  );
}

export default LocaleProvider;
