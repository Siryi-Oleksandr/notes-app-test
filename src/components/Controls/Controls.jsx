import React, { useContext } from 'react';
import { GoPlus } from 'react-icons/go';
import { RiDeleteBinLine, RiEditBoxLine } from 'react-icons/ri';
import { Button, ControlWrapper } from './Controls.styled';
import localeContext from '../../context/localeContext';

function Controls() {
  const L_Context = useContext(localeContext);
  const { onClickAdd, isAddNote, deleteNote } = L_Context;
  return (
    <ControlWrapper>
      <Button type="button" onClick={() => onClickAdd(true)}>
        <GoPlus />
      </Button>
      <Button type="button" disabled={isAddNote} onClick={deleteNote}>
        <RiDeleteBinLine />
      </Button>
      <Button
        type="button"
        disabled={isAddNote}
        onClick={() => console.log('😍 Edit')}
      >
        <RiEditBoxLine />
      </Button>
    </ControlWrapper>
  );
}

export default Controls;
