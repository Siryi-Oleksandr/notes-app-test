import { GlobalStyle } from '../../GlobalStyle';
import Header from '../Header';
import { Container, MainSection } from './App.styled';
import Sidebar from '../Sidebar';
import Workspace from '../Workspace';

function App() {
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
