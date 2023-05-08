import styled from 'styled-components';
import { animation, pallete } from '../../helpers/variables';

export const FormStyled = styled.form`
  padding: 16px 26px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-size: 18px;
`;

export const FormLabel = styled.label`
  position: relative;
  width: 350px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  font-family: 'Segoe UI';
  font-size: 18px;
`;
export const Input = styled.input`
  padding: 5px;
  width: 250px;
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
  width: 250px;
  min-height: 100px;
  border: 2px solid ${pallete.gray};
  border-radius: 4px;
  outline: none;
  font-size: 14px;
  /* color: #1664e269; */

  transition: border ${animation};

  &:hover,
  &:focus {
    border: 2px solid ${pallete.active};
  }
`;

export const Button = styled.button`
  padding: 5px;
  width: 200px;
  border: 1px solid #1664e2;
  border-radius: 4px;
  outline: none;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;

  transition: all 250ms ease-in-out;

  &:hover,
  &:focus {
    box-shadow: rgba(22, 100, 226, 0.24) 0px 3px 8px;
    background-color: rgba(22, 144, 226, 0.737);
    border-color: transparent;
    color: #fff;
  }
`;
