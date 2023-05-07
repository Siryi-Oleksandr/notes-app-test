import React from 'react';
import { GoPlus } from 'react-icons/go';
import { RiDeleteBinLine, RiEditBoxLine } from 'react-icons/ri';
import { Button, ControlWrapper } from './Controls.styled';

function Controls() {
  return (
    <ControlWrapper>
      <Button type="button" onClick={() => console.log('😍 PLUS')}>
        <GoPlus />
      </Button>
      <Button type="button" onClick={() => console.log('😫 Delete')}>
        <RiDeleteBinLine />
      </Button>
      <Button type="button" onClick={() => console.log('😍 Edit')}>
        <RiEditBoxLine />
      </Button>
    </ControlWrapper>
  );
}

export default Controls;
