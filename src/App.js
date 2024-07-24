import './App.css';
// import CampsiteCard from './features/campsites/CampsiteCard';
import CampsitesList from './features/campsites/CampsitesList';
// import { CAMPSITES } from './app/shared/CAMPSITES';
import Header from './components/Header';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <CampsiteCard campsite={CAMPSITES[1]} /> */}
      <CampsitesList />
      <Footer></Footer>
    </div>
  );
}

export default App;
