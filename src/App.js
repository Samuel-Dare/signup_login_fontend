import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Login from "./Login";
import Signup from './Signup'
import Errorpage from "./Errorpage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={ <Home />} />
        <Route path="signup" element={<Signup />}/>
        <Route path="login" element={<Login />}/>
        <Route path="*" element={<Errorpage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
