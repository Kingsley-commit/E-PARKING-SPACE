import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Signup from './Pages/Signup.js';
import About from './Pages/About.js'
import Dashboard from './Pages/Dashboard';
import LoginComponent from 'Componets/SignupComponets/LoginComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/About' element={<About/>}></Route>
          <Route path='/Signup' element={<Signup/>}></Route>
          <Route path='/LoginComponent' element={<LoginComponent/>}></Route>
          <Route path='/Dashboard/*' element={<Dashboard/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
