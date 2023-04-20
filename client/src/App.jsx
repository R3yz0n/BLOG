import { Routes, Route, useLocation } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Write from "./pages/Write";
import Home from "./pages/Home";
import Single from "./pages/Single";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {

  const { pathname } = useLocation();
  return (
    <>
      {
        ((!(pathname === '/login')) && (!(pathname === '/register'))) && <Navbar />

      }


      <Routes>f


        <Route path='/' element={<Home />} />
        <Route path="/post/:id" element={<Single />} />
        <Route path="/write" element={<Write />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {
        ((!(pathname === '/login')) && (!(pathname === '/register'))) && <Footer />

      }
    </>
  );
}

export default App;

const Layout = (props) => {
  console.log(props);
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>

  );
};
