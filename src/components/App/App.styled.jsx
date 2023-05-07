import styled from 'styled-components';
import { pallete } from '../../helpers/variables';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 16px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: ${pallete.white};
`;

export const MainSection = styled.main`
  display: flex;
  width: 100%;
`;
