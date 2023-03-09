import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import Replies from './components/Replies'
import Home from './components/Home'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path= '/register' element={<Register /> } />
            <Route path='/id:replies' element={<Replies />} />
            <Route path='/dashboard' element={<Home />} />
          </Routes>     
      </BrowserRouter>
    </div>
  );
}

export default App;
