import { openDB } from 'idb';

const STORE_NAME = 'notes';

let db = null;

async function initIndexedDB() {
  if (db) {
    return;
  }
  db = await openDB('notesDb', 1, {
    upgrade(db) {
      db.createObjectStore('notes', { keyPath: 'id', autoIncrement: true });
    },
  });
}

async function getNotes() {
  try {
    await initIndexedDB();
    const tx = db.transaction('notes');
    const notesStore = tx.objectStore('notes');
    const notes = await notesStore.getAll();

    return notes || [];
  } catch (e) {
    alert(`Something went wrong! ${e.message}`);
    console.error(e);
  }
}

async function addNote({ title, description, date }) {
  const tx = db.transaction('notes', 'readwrite');

  try {
    const id = await tx.objectStore('notes').add({ title, description, date });
    return id;
  } catch (e) {
    alert(`Something went wrong! ${e.message}`);
    console.error(e);
  }
}

async function deleteNote(id) {
  try {
    const tx = db.transaction('notes', 'readwrite');
    await tx.objectStore('notes').delete(id);
    return 200;
  } catch (e) {
    alert(`Something went wrong! ${e.message}`);
    console.error(e);
  }
}

async function editNote(data) {
  const { id, title, description, date } = data;

  try {
    const tx = db.transaction('notes', 'readwrite');
    const store = tx.objectStore('notes');
    const note = await store.put(data, id);
    console.log('smth==>', note);

    // await db.put('notes', data, id);
  } catch (e) {
    alert(`Something went wrong! ${e.message}`);
    console.error(e);
  }
}

// export async function set(key, val) {
//   return (await dbPromise).put('keyval', val, key);
// }

// const editNote = async data => {
//   const { id, title, description, date } = data;
//   try {
//     const response = await axios.put(`/apps/${APP_ID}/dtypes/${id}.json`, {
//       rest_api_key: KEY,
//       values: {
//         dcIHZdTmnawzhdKmopW6v6: title,
//         ddRvJcIJPdUiotomofWR4Q: description,
//         crWQtcOSnmW40Oh8oyW4j9: date,
//       },
//     });
//     return response?.data?.record;
//   } catch (e) {
//     alert(`Something went wrong! ${e.message}`);
//     console.error(e.message);
//   }
// };

export { getNotes, addNote, deleteNote, editNote };
