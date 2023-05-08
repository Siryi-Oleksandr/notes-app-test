import React, { useContext } from 'react';
import {
  FormStyled,
  FormLabel,
  Input,
  Button,
  TextArea,
} from './AddNotesForm.styled';
import localeContext from '../../context/localeContext';
import { nanoid } from 'nanoid';

function AddNotesForm() {
  const L_Context = useContext(localeContext);
  const { addNote } = L_Context;

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const title = form.elements.title.value;
    const description = form.elements.description.value;
    const date = new Date();
    if (!title) {
      return alert('Please write smth');
    }
    addNote({ id: nanoid(), title, description, date: date.getTime() });
    form.reset();
  };

  return (
    <FormStyled onSubmit={handleSubmit} autoComplete="off">
      <FormLabel>
        Title of the note
        <Input type="text" name="title" />
      </FormLabel>
      <FormLabel>
        Description of the note
        <TextArea type="text" name="description" />
      </FormLabel>
      <Button type="submit">Add note</Button>
    </FormStyled>
  );
}

export default AddNotesForm;
