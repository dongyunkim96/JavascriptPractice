import './App.css';
import { Routes, Route } from "react-router-dom";
import { AppContainer } from "./style/App.styled";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Page1 from './pages/1/Page1';
import Page2 from './pages/2/Page2';
import Page3 from './pages/3/Page3';
import Page4 from './pages/4/Page4';
import Page5 from './pages/5/Page5';
import Page6 from './pages/6/Page6';
import Page7 from './pages/7/Page7';
import Page8 from './pages/8/Page8';

function App() {
  return (
    <AppContainer>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/1' element={<Page1 />} />
        <Route path='/2' element={<Page2 />} />
        <Route path='/3' element={<Page3 />} />
        <Route path='/4' element={<Page4 />} />
        <Route path='/5' element={<Page5 />} />
        <Route path='/6' element={<Page6 />} />
        <Route path='/7' element={<Page7 />} />
        <Route path='/8' element={<Page8 />} />
      </Routes>
      <Footer />
    </AppContainer>
  );
}

export default App;