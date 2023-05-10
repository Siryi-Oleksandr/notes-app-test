import axios from 'axios';
import { formatIncomingData } from './dataService';

const KEY = 'abDs4qBXjiW5pdSCkRWRX2';
const APP_ID = 'c0tYlcNSnlW5lcNmkQW4GM';
const ENTITY_ID = 'afts1egG5nu4kcWPS5nCkz';
axios.defaults.baseURL = 'https://quintadb.com.ua';

async function getNotes() {
  try {
    const response = await axios.get(
      `/apps/${APP_ID}/dtypes/entity/${ENTITY_ID}.json?rest_api_key=${KEY}&name_value=1?amp;view=`
    );

    const formatedNotes = response?.data?.records.map(note =>
      formatIncomingData(note)
    );
    return formatedNotes || [];
  } catch (e) {
    alert(`Something went wrong! ${e.message}`);
    console.error(e.message);
  }
}

async function addNote(data) {
  const { title, description, date } = data;
  try {
    const response = await axios.post(`/apps/${APP_ID}/dtypes.json`, {
      rest_api_key: KEY,
      values: {
        entity_id: ENTITY_ID,
        dcIHZdTmnawzhdKmopW6v6: title,
        ddRvJcIJPdUiotomofWR4Q: description,
        crWQtcOSnmW40Oh8oyW4j9: date,
      },
    });
    return response.data;
  } catch (e) {
    alert(`Something went wrong! ${e.message}`);
    console.error(e.message);
  }
}

async function deleteNote(id) {
  try {
    const response = await axios.delete(
      `/apps/${APP_ID}/dtypes/${id}.json?rest_api_key=${KEY}`
    );
    return response.status;
  } catch (e) {
    alert(`Something went wrong! ${e.message}`);
    console.error(e.message);
  }
}

async function editNote(data) {
  const { id, title, description, date } = data;
  try {
    const response = await axios.put(`/apps/${APP_ID}/dtypes/${id}.json`, {
      rest_api_key: KEY,
      values: {
        dcIHZdTmnawzhdKmopW6v6: title,
        ddRvJcIJPdUiotomofWR4Q: description,
        crWQtcOSnmW40Oh8oyW4j9: date,
      },
    });
    const updatedNote = formatIncomingData(response?.data?.record);
    return updatedNote || null;
  } catch (e) {
    alert(`Something went wrong! ${e.message}`);
    console.error(e.message);
  }
}

export { getNotes, addNote, deleteNote, editNote };
