import localeContext from './localeContext';
import React, { useEffect, useState } from 'react';
import data from '../notes.json';

const notes = data;

function LocaleProvider({ children }) {
  // const DB = process.env.REACT_APP_DB ?? 'indexed';
  const [showedNote, setShowedNote] = useState(() => notes[0]);
  const [isAddNote, setIsAddNote] = useState(false);
  const [filter, setFilter] = useState('');

  // TODO logic with change BD
  // if (DB.includes('quinta')) {
  //   console.log('run quinta code 😎');
  // } else {
  //   console.log('run indexed code 😍');
  // }

  useEffect(() => {
    console.log('notes changed'); // TODO add notes when changed
  }, [showedNote]);

  const addNote = data => {
    notes.push(data);
    setIsAddNote(false);
  };

  const showNote = note => {
    setShowedNote(note);
  };

  const onClickAdd = () => {
    setIsAddNote(true);
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
      }}
    >
      {children}
    </localeContext.Provider>
  );
}

export default LocaleProvider;
