import styled from 'styled-components';
import { pallete } from '../../helpers/variables';

export const HeaderStyled = styled.header`
  padding: 8px 8px;
  /* margin-bottom: 10px; */
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  align-items: center;
  background-color: ${pallete.ligthGray};
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

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
