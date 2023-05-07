import { GlobalStyle } from '../../GlobalStyle';
import Header from '../Header';
import { Container } from './App.styled';

console.log(process.env.NODE_ENV);
const otherText = process.env.NODE_ENV === 'development' || 'production';

function App() {
  return (
    <Container>
      <Header />
      {otherText ? <h1>Hello bro</h1> : <h3>Other text</h3>}
      {/* <h1>Hello bro</h1> */}
      <GlobalStyle />
    </Container>
  );
}

export default App;
