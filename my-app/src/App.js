import './App.css';
import { Routes, Route } from "react-router-dom";
import { AppContainer } from "./style/App.styled";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Page1 from './pages/1/Page1';

function App() {
  return (
    <AppContainer>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/1' element={<Page1 />} />
      </Routes>
      <Footer />
    </AppContainer>
  );
}

export default App;