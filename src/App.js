
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { mediaLogos, footerTags } from './components/data/data';
import Login from './components/login/Login';


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Login />} />
    </Routes>
        <Footer mediaLogos={mediaLogos} footerTags={footerTags} />
      </Router>
    </div>
  );
}

export default App;
