import styled from 'styled-components';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';

const Title = styled.h1 `
color: #8257e6;
font-size: 64px;
`

export function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard/>
      <GlobalStyle/>
    </div>
  );
}
