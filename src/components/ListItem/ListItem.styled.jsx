import styled from 'styled-components';
import { animation, pallete } from '../../helpers/variables';

export const Item = styled.li`
  padding: 10px 14px;
  border-bottom: 1px solid ${pallete.gray};
  cursor: pointer;

  transition: background-color ${animation};

  &:hover,
  &:focus {
    background-color: ${pallete.ligthActive};
  }
`;

export const NoteTitle = styled.p`
  font-size: 18px;
  font-weight: 600;
`;

export const DescWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const NoteDesc = styled.span`
  font-size: 14px;
  font-weight: 400;
`;

export const NoteDate = styled.span`
  font-size: 14px;
  font-weight: 400;
`;
