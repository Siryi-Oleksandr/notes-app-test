import React, { useContext } from 'react';
import { GoPlus } from 'react-icons/go';
import { RiDeleteBinLine, RiEditBoxLine } from 'react-icons/ri';
import { Button, ControlWrapper } from './Controls.styled';
import localeContext from '../../context/localeContext';

function Controls() {
  const L_Context = useContext(localeContext);
  const { onClickAdd, isAddNote, isEditNote, deleteNote, onClickEdit } =
    L_Context;
  return (
    <ControlWrapper>
      <Button
        type="button"
        disabled={isEditNote}
        onClick={() => onClickAdd(true)}
      >
        <GoPlus />
      </Button>
      <Button
        type="button"
        disabled={isAddNote || isEditNote}
        onClick={deleteNote}
      >
        <RiDeleteBinLine />
      </Button>
      <Button type="button" disabled={isAddNote} onClick={onClickEdit}>
        <RiEditBoxLine />
      </Button>
    </ControlWrapper>
  );
}

export default Controls;
