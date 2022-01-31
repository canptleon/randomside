import './App.css';
import { Mainpage, Startjourney, Photoalbum , Errorpage} from './pages';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/yolculugabasla" element={<Startjourney />} />
        <Route path="/calismalarimiz" element={<Photoalbum />} />
        <Route path="/iletisim" element={<Errorpage />} />
      </Routes>
    </Router>
  );
}

export default App;