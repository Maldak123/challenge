import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login"
import Cadastro from "./pages/Cadastro";

function App() {
  return (
    <>
      <Navbar/>

      <Home/>
      {/* <Login/> */}
      {/* <Cadastro/> */}

      <Footer/>
    </>
  );
}

export default App;
