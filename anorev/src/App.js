import './App.css';
import { Route, Routes  } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Questions from './pages/Questions'
import Navigation from './components/Navigation'

function App() {
  return (
      <div>
        <Navigation />
        <Routes>
          <Route path="/" exact element={ <Home/>} />
          <Route path="/about" element={ <About/>} />
          <Route path="/contact" element={ <Contact/>} />
          <Route path="/questions" element={ <Questions/>} />
        </Routes>
      </div>
  );
}

export default App;
