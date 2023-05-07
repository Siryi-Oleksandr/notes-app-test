import styled from 'styled-components';
import { categoryBtnColor } from '../../styles/colors';

export const OverleyModal = styled.div`
  position: absolute;
  top: 20;
  right: 0;
  width: 200px;
  height: 600px;

  overflow-y: scroll;
  border: 1px solid ${categoryBtnColor};
  border-bottom-left-radius: 16px;
  border-top-left-radius: 16px;

  background-color: ${({ theme }) => theme.backgroundColor};
  z-index: 900;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Item = styled.li`
  text-align: center;
`;

export const BtnOtherCategory = styled.button`
  padding: 4px 14px;

  font-size: 12px;
  line-height: calc(16 / 12);
  text-align: center;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  color: ${categoryBtnColor};
  transition: all 250ms ease-in-out;

  &:hover,
  &:focus,
  &:active {
    transform: scale(1.2);
    font-weight: 500;
  }
`;
