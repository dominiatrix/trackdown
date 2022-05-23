import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import Contenu from './Components/Contenu';
import Annonce from './Components/Annonce';
import LogIn from './Components/LogIn';
import Property from './Components/Property';
import SignIn from './Components/SignIn';
import Declare from './Components/Declare';
import Avis from './Components/Avis';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Router>
     <Nav />  
     <Routes>

     <Route path="/Contenu" exact element={<Contenu/>} />
     <Route path="/Annonce" exact element={<Annonce/>} />
     <Route path="/Property" exact element={<Property/>} />
     <Route path="/LogIn" exact element={<LogIn/>} />
     <Route path="/SignIn" exact element={<SignIn/>} />

     </Routes>

      
    </Router>

    </div>
  );
}

export default App;
