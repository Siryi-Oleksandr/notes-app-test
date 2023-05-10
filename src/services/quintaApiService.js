import axios from 'axios';
import { formatIncomingData } from './dataService';

const KEY = 'abDs4qBXjiW5pdSCkRWRX2';
const APP_ID = 'c0tYlcNSnlW5lcNmkQW4GM';
const ENTITY_ID = 'afts1egG5nu4kcWPS5nCkz';
axios.defaults.baseURL = 'https://quintadb.com.ua';

const getNotes = async () => {
  try {
    const response = await axios.get(
      'https://quintadb.com.ua/apps/c0tYlcNSnlW5lcNmkQW4GM/dtypes/entity/afts1egG5nu4kcWPS5nCkz.json?rest_api_key=abDs4qBXjiW5pdSCkRWRX2&name_value=1?amp;view=' // TODO this string
    );
    const formatedNotes = response?.data?.records.map(note =>
      formatIncomingData(note)
    );
    return formatedNotes || [];
  } catch (e) {
    alert(`Something went wrong! ${e.message}`);
    console.error(e.message);
  }
};

const addNote = async data => {
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
};

const deleteNote = async id => {
  try {
    const response = await axios.delete(
      `/apps/${APP_ID}/dtypes/${id}.json?rest_api_key=${KEY}`
    );
    // console.log('delete response ==>', response.status);
    return response.status;
  } catch (e) {
    alert(`Something went wrong! ${e.message}`);
    console.error(e.message);
  }
};

const editNote = async data => {
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
};

export { getNotes, addNote, deleteNote, editNote };
