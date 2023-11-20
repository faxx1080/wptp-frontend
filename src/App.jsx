import './App.css';
import { Route, Routes } from 'react-router-dom'
import TopNavbar from './Components/TopNavbar'
import Home from './Components/Home'
import SAT from './Components/SAT'
import ViewRandomQuestion from './Components/ViewRandomQuestion'

function App() {

  return (
    <div className="App">
      <TopNavbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/SAT" element={<SAT />} />
        <Route path="/ViewRandomQuestion" element={<ViewRandomQuestion />} />
      </Routes>
    </div>
  );
}

export default App;



