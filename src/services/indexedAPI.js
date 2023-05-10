import { openDB } from 'idb';

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
    let tx = db.transaction('notes');
    let notesStore = tx.objectStore('notes');
    let notes = await notesStore.getAll();

    return notes;
  } catch (e) {
    alert(`Something went wrong! ${e.message}`);
    console.error(e);
  }
}

async function addNote({ title, description, date }) {
  let tx = db.transaction('notes', 'readwrite');

  try {
    await tx.objectStore('notes').add({ title, description, date });
    // await getNotes();
  } catch (e) {
    alert(`Something went wrong! ${e.message}`);
    console.error(e);
  }
}

// async function clearBooks() {
//   let tx = db.transaction('books', 'readwrite');
//   await tx.objectStore('books').clear();
//   await list();
// }

// const getNotes = async () => {
//   //   try {
//   //     const response = await axios.get(
//   //       'https://quintadb.com.ua/apps/c0tYlcNSnlW5lcNmkQW4GM/dtypes/entity/afts1egG5nu4kcWPS5nCkz.json?rest_api_key=abDs4qBXjiW5pdSCkRWRX2&name_value=1?amp;view='
//   //     );
//   //     return response?.data?.records;
//   //   } catch (e) {
//   //     alert(`Something went wrong! ${e.message}`);
//   //     console.error(e.message);
//   //   }
//   console.log(notes);
//   return notes || [];
// };

const deleteNote = async id => {
  //   try {
  //     const response = await axios.delete(
  //       `/apps/${APP_ID}/dtypes/${id}.json?rest_api_key=${KEY}`
  //     );
  //     // console.log('delete response ==>', response.status);
  //     return response.status;
  //   } catch (e) {
  //     alert(`Something went wrong! ${e.message}`);
  //     console.error(e.message);
  //   }
};

const editNote = async data => {
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
};

export { getNotes, addNote, deleteNote, editNote };
