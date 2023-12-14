import './assets/App.css';
import { Route, Routes } from 'react-router-dom'
import TopNavbar from './Layouts/TopNavbar'
import Home from './Pages/Home'
import SAT from './Pages/SAT'
import ViewRandomQuestion from './Pages/ViewRandomQuestion'
import TestResult from './Pages/TestResult'
import TestResultDetail from './Pages/TestResultDetail'

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <div style={{ height: '64px' }}></div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/SAT" element={<SAT />} />
        <Route path="/ViewRandomQuestion" element={<ViewRandomQuestion />} />
        <Route path="/TestResult/:id" element={<TestResultDetail />} />
        <Route path="/TestResult" element={<TestResult />} />
      </Routes>
      <div style={{ height: '16px' }}></div>
    </div>
  );
}

export default App;
