import localeContext from './localeContext';
import React, { useEffect, useState } from 'react';
import data from '../notes.json';

const notes = data;

function LocaleProvider({ children }) {
  const [showedNote, setShowedNote] = useState(() => notes[0]);
  const [isAddNote, setIsAddNote] = useState(false);

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

  const onClickAdd = note => {
    setIsAddNote(true);
  };

  return (
    <localeContext.Provider
      value={{
        addNote,
        notes,
        showedNote,
        showNote,
        isAddNote,
        onClickAdd,
      }}
    >
      {children}
    </localeContext.Provider>
  );
}

export default LocaleProvider;
