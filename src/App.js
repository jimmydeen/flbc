import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import DataProvider from './pages/DataProvider/DataProvider';
import FMLClient from './pages/FMLClient/FMLClient';
import Form from './pages/Form';
import GetClientProgram from './pages/DataProvider/GetClientProgram';
import RequestAgreement from './pages/DataProvider/RequestAgreement';
import Deploy from './pages/FMLClient/Deploy';
import NavBar from './components/NavBar';
import ManageRequest from './pages/FMLClient/ManageRequest';
import Waiting from './pages/DataProvider/Waiting';
import Progress from './pages/Progress';
import WaitingDeployment from './pages/FMLClient/WaitingDeployment';

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
            <Route path="/waitingDeployment/1294801" element={<WaitingDeployment/>}></Route>
            <Route path="/startServer" element={<ManageRequest/>}/>

            {/* Data Provider */}
            <Route path="/viewRequests" element={<DataProvider/>}></Route>
            <Route path="/agreement" element={<RequestAgreement/>}></Route>
            <Route path="/waiting" element={<Waiting/>}></Route>
            <Route path="/getClientProgram" element={<GetClientProgram/>}/>
            <Route path="/form" element={<Form/>}></Route>

            {/* Unified */}
            <Route path="/job/:id" element={<ManageRequest/>}></Route>
            <Route path="/progress/:id" element={<Progress/>}></Route>
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
