import React,{useContext} from 'react';
import LoginPage from "./components/LoginPage";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import MovieSection from "./components/MovieSection";
import Footer from "./components/Footer";
// import {useStateValue} from "./StateContext";
import {UserContext} from "./ContextApi.js";


function App() {
  // const [{user}] = useStateValue()
  const [user, dispatch] = useContext(UserContext);
  return (
    <div>
        {user ? (
          <div>
            <Navbar />
            <Carousel />
            <MovieSection />
            <Footer />
          </div>
        ) : <LoginPage />}
    </div>
  )
}

export default App


