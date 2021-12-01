import './App.css';
import SignUp from './pages/SignUp';
import { Routes, Route, Link } from "react-router-dom";
import SignIn from './pages/SignIn';

function App() {
  return (
    <div className='App'>
      <Routes>
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='/sign-in' element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
