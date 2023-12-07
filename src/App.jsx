import { NavLink, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CodeWarsUserLookup from "./pages/UserLookup";
import UserInfo from "./pages/UserInfo";
import "./App.css";

function App() {
  return (
    <>
      <nav>
        <ul
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            listStyle: "none",
            width: "100%",
            padding: "1rem",
            color: "white",
          }}
        >
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/userlookup">CodeWars Lookup</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/userlookup" element={<CodeWarsUserLookup />} />
        <Route path="/user/:username" element={<UserInfo />} />
      </Routes>
    </>
  );
}

export default App;
