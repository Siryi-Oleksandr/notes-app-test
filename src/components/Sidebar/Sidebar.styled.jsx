import styled from 'styled-components';
import { pallete } from '../../helpers/variables';

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  min-width: 235px;
  border-right: 1px solid ${pallete.gray};
`;

/* Стилі для бічного меню */
// .sidebar {
//   /* Стилі за замовчуванням */
//   width: 300px;
//   /* інші стилі */

//   /* Змінюємо стилі для екранів з шириною менше 480px */
//   @media (max-width: 480px) {
//     width: 0;
//     position: absolute;
//     top: 0;
//     left: -300px;
//     transition: all 0.3s ease-in-out;
//   }
// }

// /* Стилі для кнопки виклику бічного меню */
// .sidebar-toggle {
//   /* Стилі за замовчуванням */
//   display: none;
//   /* інші стилі */

//   /* Змінюємо стилі для екранів з шириною менше 480px */
//   @media (max-width: 480px) {
//     display: block;
//     /* інші стилі */
//   }
// }
