import styled from 'styled-components';
import { pallete } from '../../helpers/variables';

export const NoteDetailsWrapper = styled.div`
  margin-top: 4px;
  flex-grow: 1;
  padding: 8px 20px;
  text-align: center;
`;

export const NoteDate = styled.span`
  margin-bottom: 16px;
  font-weight: 600;
  font-size: 14px;
  color: ${pallete.gray};
`;

export const NoteTitle = styled.p`
  margin-top: 8px;
  font-size: 16px;
  font-weight: 500;
  text-align: left;
`;

export const NoteDesc = styled.p`
  margin-top: 16px;
  font-size: 16px;
  text-align: left;
`;
