import localeContext from './localeContext';
import React, { useEffect, useState } from 'react';
// import data from '../notes.json';
import * as quintaAPI from '../services/quintaApiService';
import * as indexedAPI from '../services/indexedAPI';
import { formatIncomingData } from '../services/dataService';

const DB = process.env.REACT_APP_DB ?? 'quinta';
let dbAPI = quintaAPI;

// TODO logic with change BD
if (DB.includes('indexed')) {
  console.log('runing indexed API 😎');
  dbAPI = indexedAPI;
} else {
  console.log('runing quinta API 😍');
}

function LocaleProvider({ children }) {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);
  const [isAddNote, setIsAddNote] = useState(false);
  const [isEditNote, setIsEditNote] = useState(false);
  const [filter, setFilter] = useState('');
  const [isEmptyNotes, setIsEmptyNotes] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshNotes, setIsRefreshNotes] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    quintaAPI
      .getNotes()
      .then(data => {
        if (data.length === 0) {
          setCurrentNote(null);
          setIsEmptyNotes(true);
        }
        const allNotes = data.map(note => formatIncomingData(note));
        setNotes(allNotes.sort((a, b) => a.date - b.date));
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
      setCurrentNote(null);
    } else {
      setIsEmptyNotes(false);
    }
  }, [notes]);

  const addNote = data => {
    quintaAPI.addNote(data).then(() => setIsRefreshNotes(new Date()));
    setIsAddNote(false); // for close window with add form
  };

  const editNote = data => {
    quintaAPI.editNote(data).then(note => {
      const updatedNote = formatIncomingData(note);
      setCurrentNote(updatedNote);
      setIsRefreshNotes(new Date());
    });
    setIsEditNote(false);
  };

  const deleteNote = () => {
    if (window.confirm('Are you sure? Do you want remove note?')) {
      quintaAPI.deleteNote(currentNote.id).then(status => {
        if (status === 200) {
          setIsRefreshNotes(new Date());
          setCurrentNote(null);
        }
      });
    }
  };

  const showNote = note => {
    setCurrentNote(note);
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
        currentNote,
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
