import React, { useEffect, useState } from 'react';
import localeContext from './localeContext';
import * as quintaAPI from '../services/quintaApiService';
import * as indexedAPI from '../services/indexedAPIService';
import { filterList } from '../services/dataService';

const DB = process.env.REACT_APP_DB ?? 'indexed';
let dbAPI = indexedAPI;

if (DB.includes('quinta')) {
  console.log('runing quinta DB 😎');
  dbAPI = quintaAPI;
} else {
  console.log('runing indexed DB 😍');
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
    dbAPI
      .getNotes()
      .then(data => {
        if (data.length === 0) {
          setCurrentNote(null);
          setIsEmptyNotes(true);
          return;
        }

        setNotes(data.sort((a, b) => a.date - b.date));
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
    dbAPI.addNote(data).then(() => setIsRefreshNotes(new Date()));
    setIsAddNote(false); // for close window with add form
  };

  const editNote = data => {
    dbAPI.editNote(data).then(note => {
      setCurrentNote(note);
      setIsRefreshNotes(new Date());
    });
    setIsEditNote(false);
  };

  const deleteNote = () => {
    if (window.confirm('Are you sure? Do you want remove note?')) {
      dbAPI.deleteNote(currentNote.id).then(status => {
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

  return (
    <localeContext.Provider
      value={{
        addNote,
        notes: filterList(notes, filter),
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
