import { GlobalStyle } from '../../GlobalStyle';
import Header from '../Header';
import { Container, MainSection } from './App.styled';
import Sidebar from '../Sidebar';
import Workspace from '../Workspace';

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
