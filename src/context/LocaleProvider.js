import localeContext from './localeContext';
import React, { useEffect, useState } from 'react';
// import data from '../notes.json';
import { addNotes, getNotes } from '../services/quintaApiService';

function LocaleProvider({ children }) {
  // const DB = process.env.REACT_APP_DB ?? 'indexed';
  const [notes, setNotes] = useState([]);
  const [showedNote, setShowedNote] = useState(null);
  const [isAddNote, setIsAddNote] = useState(false);
  const [isEditNote, setIsEditNote] = useState(false);
  const [filter, setFilter] = useState('');
  const [isEmptyNotes, setIsEmptyNotes] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshNotes, setIsRefreshNotes] = useState(null);
  const [showModal, setShowModal] = useState(false);

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
        if (data.length === 0) {
          setShowedNote(null);
          setIsEmptyNotes(true);
        }
        const allNotes = data.map(note => ({
          id: note.id,
          title: note.values.title,
          description: note.values.description,
          date: Number(note.values.date),
        }));
        setNotes(allNotes.sort((a, b) => a.date - b.date));
        console.log('new refresh', allNotes);
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
      setShowedNote(null);
    } else {
      setIsEmptyNotes(false);
    }
  }, [notes]);

  const addNote = data => {
    addNotes(data).then(() => setIsRefreshNotes(new Date()));
    setIsAddNote(false); // for close window with add form
  };
  // TODO Edit logic
  const editNote = data => {
    const index = notes.findIndex(note => note.id === data.id);
    if (index === -1) {
      alert('note was not found');
    }
    notes[index] = { ...data }; // TODo bad idea
    setNotes(notes);
    setIsEditNote(false);
  };

  const deleteNote = () => {
    if (window.confirm('Are you sure? Do you want remove note?')) {
      const actualNotes = notes.filter(note => note.id !== showedNote.id);
      setNotes(actualNotes);
    }
  };

  const showNote = note => {
    setShowedNote(note);
  };

  const onClickAdd = () => {
    setIsAddNote(true); // for open window with add form
  };

  const onClickEdit = () => {
    setIsEditNote(true); // for close window with edit form
  };

  const cancel = () => {
    setIsEditNote(false); // for close window with edit and add forms
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
