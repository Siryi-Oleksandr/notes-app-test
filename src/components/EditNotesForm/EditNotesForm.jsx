import React, { useContext, useState } from 'react';
import {
  FormStyled,
  FormLabel,
  Input,
  Button,
  TextArea,
  ButtonWrapper,
} from '../AddNotesForm/AddNotesForm.styled';
import localeContext from '../../context/localeContext';

function EditNotesForm() {
  const L_Context = useContext(localeContext);
  const { editNote, showedNote, cancel } = L_Context;

  const [title, setTitle] = useState(showedNote.title);
  const [description, setDescription] = useState(showedNote.description);

  const handleSubmit = evt => {
    evt.preventDefault();
    const date = new Date();
    if (!title) {
      return alert('Please write smth');
    }
    editNote({ id: showedNote.id, title, description, date: date.getTime() });
    evt.currentTarget.reset();
  };

  const handleChangeTitle = evt => {
    setTitle(evt.target.value);
  };

  const handleChangeDesc = evt => {
    setDescription(evt.target.value);
  };

  return (
    <FormStyled onSubmit={handleSubmit} autoComplete="off">
      <FormLabel>
        Title of the note
        <Input
          type="text"
          name="title"
          value={title}
          onChange={handleChangeTitle}
        />
      </FormLabel>
      <FormLabel>
        Description of the note
        <TextArea
          type="text"
          name="description"
          value={description}
          onChange={handleChangeDesc}
        />
      </FormLabel>
      <ButtonWrapper>
        <Button type="submit">Save</Button>
        <Button type="button" onClick={cancel}>
          Cancel
        </Button>
      </ButtonWrapper>
    </FormStyled>
  );
}

export default EditNotesForm;
