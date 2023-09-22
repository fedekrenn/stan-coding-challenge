import './App.css';
// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// Pages
import Home from './pages/Home/Home';
import MediaContainer from './pages/MediaContainer/MediaContainer';
// Router
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/peliculas"
            element={<MediaContainer type="movie" />}
          />
          <Route
            path="/series"
            element={<MediaContainer type="series" />}
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
