import styled from 'styled-components';
import { animation, pallete } from '../../helpers/variables';

export const Aside = styled.aside`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  min-width: 235px;
  border-right: 1px solid ${pallete.gray};
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

  @media (max-width: 480px) {
    width: 0;
    position: absolute;
    top: 30px;
    left: -235px;
    transition: all ${animation};
  }
`;

export const AsaidWrapper = styled.div`
  position: relative;
`;

export const BurgerMenu = styled.button`
  padding: 4px 16px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${pallete.ligthActive};
  border-radius: 4px;
  outline: none;
  background-color: ${pallete.white};

  cursor: pointer;

  transition: all ${animation};

  &:hover,
  &:focus {
    background-color: ${pallete.ligthActive};
  }

  @media (min-width: 480px) {
    display: none;
  }
`;
