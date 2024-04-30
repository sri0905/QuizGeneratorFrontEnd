import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import FetchingAllTheQuestions from "./components/FetchingAllTheQuestions";
import Home from "./components/Home";
import AddAQuestion from "./components/AddAQuestion";

function App() {
  return (
    <Router>

    <>
    <NavBar/>
    
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/addAQuestion" element={<AddAQuestion/>} />
    </Routes>
    </>
    </Router>
  );
}

export default App;
