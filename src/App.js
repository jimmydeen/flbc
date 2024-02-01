import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Client from './pages/Client';
import FMLClient from './pages/FMLClient';
import Form from './pages/Form';
import JobAgreement from './pages/JobAgreement';
import Deploy from './pages/Deploy';
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
            {/* FMLClient Flow */}
            <Route path="/createRequest" element={<FMLClient/>}></Route>
            <Route path="/deploy" element={<Deploy/>}></Route>

            <Route path="/agreement" element={<JobAgreement/>}></Route>
            <Route path="/form" element={<Form/>}></Route>
            <Route path="/viewRequests" element={<Client/>}></Route>
            <Route path="/job/:id" element={<Status/>}></Route>
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
