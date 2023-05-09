import styled from 'styled-components';
import { animation, pallete } from '../../helpers/variables';

export const FormStyled = styled.form`
  padding: 16px 26px;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 15px;
  font-size: 18px;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 18px;
`;
export const Input = styled.input`
  padding: 5px;
  width: 100%;
  border: 2px solid ${pallete.gray};
  border-radius: 4px;
  outline: none;
  font-size: 14px;

  transition: border ${animation};

  &:hover,
  &:focus {
    border: 2px solid ${pallete.active};
  }
`;

export const TextArea = styled.textarea`
  padding: 5px;
  width: 100%;
  min-height: 100px;
  border: 2px solid ${pallete.gray};
  border-radius: 4px;
  outline: none;
  font-size: 14px;

  transition: border ${animation};

  &:hover,
  &:focus {
    border: 2px solid ${pallete.active};
  }
`;

export const Button = styled.button`
  padding: 5px;
  width: 100px;
  border: 1px solid ${pallete.active};
  border-radius: 4px;
  outline: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  transition: all 250ms ease-in-out;

  &:hover,
  &:focus {
    box-shadow: rgba(22, 100, 226, 0.24) 0px 3px 8px;
    background-color: rgba(22, 144, 226, 0.737);
    border-color: transparent;
    color: ${pallete.white};
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;
