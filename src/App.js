import GlobalStyles from './components/styles/Global';

import {StyledApp} from './components/styles/App.styled';
import { AppWrap } from './components/styles/AppWrap';

import Footer from './components/Footer';
import GetStarted from './components/GetStarted';

function App() {
  return (
    <StyledApp>
      <GlobalStyles/>
      <AppWrap>
        <Footer/>
        <GetStarted/>
      </AppWrap>


    </StyledApp>
  );
}

export default App;
