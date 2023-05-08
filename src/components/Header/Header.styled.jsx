import styled from 'styled-components';
import { pallete } from '../../helpers/variables';

export const HeaderStyled = styled.header`
  padding: 8px 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  align-items: center;
  background-color: ${pallete.ligthGray};

  @media (min-width: 321px) {
  }

  @media (min-width: 480px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 8px 16px;
  }

  @media (min-width: 901px) {
    /* padding: 16px 48px; */
  }
`;
