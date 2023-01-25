
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { mediaLogos, footerTags } from './components/data/data';


function App() {
  return (
    <div>  
      <Router>
      <Header />
        <Routes>
    <Route path='/' element={<Main />}  />
    </Routes>
    <Footer  mediaLogos={mediaLogos} footerTags={footerTags} />
    </Router>
   </div> 
  );
}

export default App;
