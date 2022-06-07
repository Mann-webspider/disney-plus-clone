import "./styles/App.css";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Details from "./Details";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
