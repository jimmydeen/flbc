import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import DataProvider from './pages/DataProvider/DataProvider';
import FMLClient from './pages/FMLClient/FMLClient';
import Form from './pages/Form';
import GetClientProgram from './pages/GetClientProgram';
import JobAgreement from './pages/DataProvider/JobAgreement';
import Deploy from './pages/FMLClient/Deploy';
import NavBar from './components/NavBar';
import Status from './pages/FMLClient/Status';
import Waiting from './pages/DataProvider/Waiting';

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

            {/* Data Provider */}
            <Route path="/viewRequests" element={<DataProvider/>}></Route>
            <Route path="/agreement" element={<JobAgreement/>}></Route>
            <Route path="/waiting" element={<Waiting/>}></Route>
            <Route path="/getClientProgram" element={<GetClientProgram/>}/>
            <Route path="/form" element={<Form/>}></Route>

            
            {/* Unified */}
            <Route path="/job/:id" element={<Status/>}></Route>
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
