import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './LoginPage/Login';
import AdditionalDetails from './SignUpPage/AdditionalDetails';
import SignUp from './SignUpPage/SignUp';
import WelcomPage from './SignUpPage/WelcomPage';
import Deposit from './Frames/Deposit';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<WelcomPage />}/>
          <Route path='/Login' element={<Login />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/additionalDetails" element={<AdditionalDetails />}/>
          <Route path="/Deposit" element={<Deposit />}/>        
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
