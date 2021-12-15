import './App.css';
import SignUp from './pages/SignUp';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import SignIn from './pages/SignIn';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from "react-redux";
import store from "./store";
import MainPage from './pages/MainPage';
import Header from './components/Header';
import { createBrowserHistory } from "history";
export const history = createBrowserHistory();

const theme = createTheme({
  typography: {
    fontFamily: 'Raleway, Arial',
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className='App'>
          <Header />
          <Routes>
            <Route exact path='/' element={<MainPage />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/sign-in' element={<SignIn />} />
          </Routes>
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
