import styled from 'styled-components';
import { pallete, animation } from '../../helpers/variables';

export const Button = styled.button`
  padding: 4px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 4px;
  outline: none;
  background-color: ${pallete.white};

  cursor: pointer;

  transition: all ${animation};

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

export const ControlWrapper = styled.div`
  display: flex;
  gap: 10px;
`;