
// beljar state
import React, {useState} from 'react';
// end state

import Intro from './components/Intro';
import ClassComponents from './components/classComponents';
// funsional components
import MyButton from './components/MyButton';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

// belajar route
import { BrowserRouter as  Router, Routes , Route } from 'react-router-dom';

// role function const App = () =>
function App() {
  const navText = "apprizal";
  
  const clicked = () => {
    return alert("button dipencet");
  }

  function paragraf () {
    return (
        <div>
          <i>ini tulisan miring</i>
          <marquee>ini tulisan berjalan</marquee>
        </div>
    );
  }

  // state adalah penampungan data atau multabele data type data nya apapun
  const [getNavbarvalue, setNavbarvalue] = useState(""); //pemanggil use state
  const changeNavbarvalue = () => {
    // alert("mantap bor");
    // console.log("button di click");
    setNavbarvalue("myBlog");
  }
  // 

  return (
    <>
      {/* intro di panggil  */}

      <p>ini function components</p>
      <Intro name="afifah"/>
      <Intro  name="meyzan"/>

      <p>ini class components</p>
      <ClassComponents paragraf={paragraf}/>

      <MyButton clicked={clicked}/>

      <Navbar test={navText} newValue={getNavbarvalue}/>


      {/* homepage sederhana */}
        <h1>Ini homepage</h1>
        <p>{getNavbarvalue}</p>
        <button onClick={() => changeNavbarvalue()}>ubah navigasi</button>

        <Router>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<About/>}/>
              <Route path="*" element={<NotFound/>}/>



          </Routes>
        </Router>

   
    </>
  );
}

export default App;
