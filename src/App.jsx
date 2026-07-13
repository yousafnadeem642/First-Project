import { Routes, Route } from "react-router-dom";


import Header from "./Components/Header"
import Footer from "./Components/Footer";
import Home from "./Page/Home";
import Plan from "./Page/Plan";
import Blog from "./Page/Blog";
import Login from "./Page/Login";
import Signup from "./Page/Sigmup";

function App() {
  return (
    <>
      <Header />

     <div className="container my-5 pt-5" >
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Plan" element={<Plan/>}/>
      <Route path="/Blog" element={<Blog/>}/>
  <Route path="/Login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
          
     </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;

