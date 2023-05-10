import { openDB } from 'idb';

const STORE_NAME = 'notes';

let db = null;

async function initIndexedDB() {
  if (db) {
    return;
  }
  db = await openDB('notesDb', 1, {
    upgrade(db) {
      db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
    },
  });
}

async function getNotes() {
  try {
    await initIndexedDB();
    const tx = db.transaction(STORE_NAME);
    const notesStore = tx.objectStore(STORE_NAME);
    const notes = await notesStore.getAll();

    return notes || [];
  } catch (e) {
    alert(`Something went wrong! ${e.message}`);
    console.error(e);
  }
}

async function addNote({ title, description, date }) {
  const tx = db.transaction(STORE_NAME, 'readwrite');

  try {
    const id = await tx
      .objectStore(STORE_NAME)
      .add({ title, description, date });
    return id;
  } catch (e) {
    alert(`Something went wrong! ${e.message}`);
    console.error(e);
  }
}

async function deleteNote(id) {
  try {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    await tx.objectStore(STORE_NAME).delete(id);
    return 200;
  } catch (e) {
    alert(`Something went wrong! ${e.message}`);
    console.error(e);
  }
}

async function editNote(data) {
  try {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    const id = await store.put(data);
    const note = await store.get(id);

    return note;
  } catch (e) {
    alert(`Something went wrong! ${e.message}`);
    console.error(e);
  }
}

export { getNotes, addNote, deleteNote, editNote };
