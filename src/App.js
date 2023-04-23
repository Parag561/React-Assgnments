import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Topbar from './components/topbar/Topbar';
import Home from './pages/Home/Home'
import Single from './pages/single/Single';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/post/:id' element={<Single/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
