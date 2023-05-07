import styled from 'styled-components';
import { pallete } from '../../helpers/variables';

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  min-width: 235px;
  border-right: 1px solid ${pallete.gray};
`;
