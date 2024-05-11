import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './LoginPage/Login';
import AdditionalDetails from './SignUpPage/AdditionalDetails';
import SignUp from './SignUpPage/SignUp';
import WelcomPage from './SignUpPage/WelcomPage';
import Deposit from './Frames/Deposit';
import Withdraw from './Frames/Withdraw';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import FastCash from './Frames/FastCash';
import ChangePin from './Frames/ChangePin';
import BalanceEnquiry from './Frames/BalanceEnquiry';
import Statement from './Frames/Statement';

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
          <Route path="/Withdraw" element={<Withdraw />}/>        
          <Route path="/FastCash" element={<FastCash />}/>        
          <Route path="/ChangePin" element={<ChangePin />}/>        
          <Route path="/balanceEnquiry" element={<BalanceEnquiry />}/>        
          <Route path="/Statement" element={<Statement />}/>        
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
