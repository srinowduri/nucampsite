import './App.css';
// import CampsiteCard from './features/campsites/CampsiteCard';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
// import { CAMPSITES } from './app/shared/CAMPSITES';
import Header from './components/Header';
import Footer from './components/footer';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <CampsiteCard campsite={CAMPSITES[1]} /> */}
      <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='contact' element={<ContactPage />} />
                <Route path='directory' element={<CampsitesDirectoryPage />} />
                <Route path='directory/:campsiteId' element={<CampsiteDetailPage />} />  
                <Route path='about' element={<AboutPage />} />
            </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
