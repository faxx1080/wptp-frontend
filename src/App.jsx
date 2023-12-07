import './assets/App.css';
import { Route, Routes } from 'react-router-dom'
import TopNavbar from './Components/TopNavbar'
import Home from './Pages/Home'
import SAT from './Pages/SAT'
import ViewRandomQuestion from './Pages/ViewRandomQuestion'
import Result from './Pages/Result'

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/SAT" element={<SAT />} />
        <Route path="/ViewRandomQuestion" element={<ViewRandomQuestion />} />
        <Route path="/Result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;



