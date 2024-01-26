import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Client from './pages/Client';
import Form from './pages/Form';
import JobAgreement from './pages/JobAgreement';
import User from './pages/User';
import NavBar from './components/NavBar';
import Status from './pages/Status';

function App() {

  const theme = createTheme({
    typography : {
      fontFamily: [ 
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(',')
    }
  });

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <NavBar></NavBar>
          <Routes>
            <Route path="/agreement" element={<JobAgreement/>}></Route>
            <Route path="/form" element={<Form/>}></Route>
            <Route path="/user" element={<User/>}></Route>
            <Route path="/client" element={<Client/>}></Route>
            <Route path="/job/:id" element={<Status/>}></Route>
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
