import { useContext } from 'react';
import { GlobalStyle } from '../../GlobalStyle';
import Header from '../Header';
import { Container } from './App.styled';
import localeContext from '../../context/localeContext';

// console.log(process.env.NODE_ENV);
// const otherText = process.env.NODE_ENV === 'development' || 'production';

function App() {
  const LS_Context = useContext(localeContext);
  const { a } = LS_Context;
  console.log('a =>', a);
  return (
    <Container>
      <Header />

      <h1>Hello bro</h1>
      <GlobalStyle />
    </Container>
  );
}

export default App;
