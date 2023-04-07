import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Write from "./pages/Write";
import Home from "./pages/Home";
import Single from "./pages/Single";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="app">
      <div className=" container">
        <Routes>

          <Route path="/" element={
            <>
              <Layout />
              <Home />
            </>}
          />

          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="write" element={<Write />} />
          <Route path="post/:id" element={<Single />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
