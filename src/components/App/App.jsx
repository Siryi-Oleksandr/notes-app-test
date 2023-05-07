import { useContext } from 'react';
import { GlobalStyle } from '../../GlobalStyle';
import Header from '../Header';
import { Container, MainSection } from './App.styled';
import localeContext from '../../context/localeContext';
import Sidebar from '../Sidebar';
import Workspace from '../Workspace';

const date = new Date();
console.log(date.getTime());

// console.log(process.env.NODE_ENV);
// const otherText = process.env.NODE_ENV === 'development' || 'production';

function App() {
  // const LS_Context = useContext(localeContext);
  // const { a } = LS_Context;
  // console.log('a =>', a);
  return (
    <Container>
      <Header />
      <MainSection>
        <Sidebar />
        <Workspace />
      </MainSection>
      <GlobalStyle />
    </Container>
  );
}

export default App;
