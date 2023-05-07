import styled from 'styled-components';
import { pallete } from '../../helpers/variables';

export const Input = styled.input`
  display: flex;
  align-items: center;
  text-align: center;
  width: 200px;
  padding: 4px 8px;
  border: none;
  outline: none;
  border-radius: 4px;

  background-color: ${pallete.white};
`;

export const SearchWrapper = styled.div`
  position: relative;
`;
export const IconWrapper = styled.div`
  position: absolute;
  top: 5px;
  left: 50px;
`;
