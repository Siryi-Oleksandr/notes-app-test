import React, { useContext } from 'react';
import {
  FormStyled,
  FormLabel,
  Input,
  Button,
  TextArea,
  ButtonWrapper,
} from './AddNotesForm.styled';
import localeContext from '../../context/localeContext';

function AddNotesForm() {
  const L_Context = useContext(localeContext);
  const { addNote, cancel } = L_Context;

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const title = form.elements.title.value;
    const description = form.elements.description.value;
    const date = new Date();
    if (!title) {
      return alert('Please write title');
    }
    addNote({ title, description, date: date.getTime() });
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
      <ButtonWrapper>
        <Button type="submit">Add note</Button>
        <Button type="button" onClick={cancel}>
          Cancel
        </Button>
      </ButtonWrapper>
    </FormStyled>
  );
}

export default AddNotesForm;
