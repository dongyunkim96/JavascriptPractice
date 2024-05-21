import './App.css';
import { Routes, Route } from "react-router-dom";
import { AppContainer } from "./style/App.styled";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <AppContainer>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </AppContainer>
  );
}

export default App;