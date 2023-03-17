
// beljar state
import React, {useState, useEffect} from 'react';
// end state

import Intro from './components/Intro';
import ClassComponents from './components/classComponents';
// funsional components
import MyButton from './components/MyButton';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import { useRef } from 'react';

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
          {/* <marquee>ini tulisan berjalan</marquee> */}
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

  const [pacarasaya, setPacarSaya] = useState(1);
  const [namaPacar, setnamaPacar] = useState("");
  
  // HOOKS
  useEffect(() => {
    if(pacarasaya > 1) {
      setnamaPacar("Jodi")
    }else{
      setnamaPacar("uhuy")
    }
  },[pacarasaya])

  const linkref = useRef(null)

  // ref adalah paramter linkref.current
  const scrollbawah = (ref) => {
      window.scrollTo({
        top: ref.offsetTop,
        left: 0,
        behavior: 'smooth'
      })
  }

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
              <Route path="/" element={<Home/>}  />
              <Route path="/about" element={<About/>}/>
              <Route path="*" element={<NotFound/>}/>



          </Routes>
        </Router>
        <button onClick={() => scrollbawah(linkref.current)}>klik use ref</button>

        {/* arrow function () => */}
        <h5>nama pacar : {namaPacar}</h5>
        <h1>saya memilik pacar : {pacarasaya} pacara</h1>
        <button onClick={() => setPacarSaya((prev) => prev + 1)} >tambah pacar </button>
        <button onClick={() => setPacarSaya((prev) => prev - 1)} >kurang ppacar </button>

        <br></br>
        
      

        <p>lorem100
          sadugsaidugsaiudgisaugd isugds
          ad agf sd giosdgf 
          gisd f
          psd gfpidsgf pisdg fipgsd fgids gfi dsofg odsugfd
          fdfgdsogf osd gufosudgf ugf ousd gf ousdgf dos
          gfodsgfo udsgf ousdgfdgfitsdgfbytsdgfbuysgdf uy gdsuyfgadbftdft 8dagftb8atf87abtf8t7lorem100
          sadugsaidugsaiudgisaugd isugds
          ad agf sd giosdgf 
          gisd f
          psd gfpidsgf pisdg fipgsd fgids gfi dsofg odsugfd
          fdfgdsogf osd gufosudgf ugf ousd gf ousdgf dos
          gfodsgfo udsgf ousdgfdgfitsdgfbytsdgfbuysgdf uy gdsuyfgadbftdft 8dagftb8atf87abtf8t7
          lorem100
          sadugsaidugsaiudgisaugd isugds
          ad agf sd giosdgf 
          gisd f
          psd gfpidsgf pisdg fipgsd fgids gfi dsofg odsugfd
          fdfgdsogf osd gufosudgf ugf ousd gf ousdgf dos
          gfodsgfo udsgf ousdgfdgfitsdgfbytsdgfbuysgdf uy gdsuyfgadbftdft 8dagftb8atf87abtf8t7lorem100
          sadugsaidugsaiudgisaugd isugds
          ad agf sd giosdgf 
          gisd f
          psd gfpidsgf pisdg fipgsd fgids gfi dsofg odsugfd
          fdfgdsogf osd gufosudgf ugf ousd gf ousdgf dos
          gfodsgfo udsgf ousdgfdgfitsdgfbytsdgfbuysgdf uy gdsuyfgadbftdft 8dagftb8atf87abtf8t7lorem100
          sadugsaidugsaiudgisaugd isugds
          ad agf sd giosdgf 
          gisd f
          psd gfpidsgf pisdg fipgsd fgids gfi dsofg odsugfd
          fdfgdsogf osd gufosudgf ugf ousd gf ousdgf dos
          gfodsgfo udsgf ousdgfdgfitsdgfbytsdgfbuysgdf uy gdsuyfgadbftdft 8dagftb8atf87abtf8t7lorem100
          sadugsaidugsaiudgisaugd isugds
          ad agf sd giosdgf 
          gisd f
          psd gfpidsgf pisdg fipgsd fgids gfi dsofg odsugfd
          fdfgdsogf osd gufosudgf ugf ousd gf ousdgf dos
          gfodsgfo udsgf ousdgfdgfitsdgfbytsdgfbuysgdf uy gdsuyfgadbftdft 8dagftb8atf87abtf8t7lorem100
          sadugsaidugsaiudgisaugd isugds
          ad agf sd giosdgf 
          gisd f
          psd gfpidsgf pisdg fipgsd fgids gfi dsofg odsugfd
          fdfgdsogf osd gufosudgf ugf ousd gf ousdgf dos
          gfodsgfo udsgf ousdgfdgfitsdgfbytsdgfbuysgdf uy gdsuyfgadbftdft 8dagftb8atf87abtf8t7lorem100
          sadugsaidugsaiudgisaugd isugds
          ad agf sd giosdgf 
          gisd f
          psd gfpidsgf pisdg fipgsd fgids gfi dsofg odsugfd
          fdfgdsogf osd gufosudgf ugf ousd gf ousdgf dos
          gfodsgfo udsgf ousdgfdgfitsdgfbytsdgfbuysgdf uy gdsuyfgadbftdft 8dagftb8atf87abtf8t7lorem100
          sadugsaidugsaiudgisaugd isugds
          ad agf sd giosdgf 
          gisd f
          psd gfpidsgf pisdg fipgsd fgids gfi dsofg odsugfd
          fdfgdsogf osd gufosudgf ugf ousd gf ousdgf dos
          gfodsgfo udsgf ousdgfdgfitsdgfbytsdgfbuysgdf uy gdsuyfgadbftdft 8dagftb8atf87abtf8t7lorem100
          sadugsaidugsaiudgisaugd isugds
          ad agf sd giosdgf 
          gisd f
          psd gfpidsgf pisdg fipgsd fgids gfi dsofg odsugfd
          fdfgdsogf osd gufosudgf ugf ousd gf ousdgf dos
          gfodsgfo udsgf ousdgfdgfitsdgfbytsdgfbuysgdf uy gdsuyfgadbftdft 8dagftb8atf87abtf8t7lorem100
          sadugsaidugsaiudgisaugd isugds
          ad agf sd giosdgf 
          gisd f
          psd gfpidsgf pisdg fipgsd fgids gfi dsofg odsugfd
          fdfgdsogf osd gufosudgf ugf ousd gf ousdgf dos
          gfodsgfo udsgf ousdgfdgfitsdgfbytsdgfbuysgdf uy gdsuyfgadbftdft 8dagftb8atf87abtf8t7lorem100
          sadugsaidugsaiudgisaugd isugds
          ad agf sd giosdgf 
          gisd f
          psd gfpidsgf pisdg fipgsd fgids gfi dsofg odsugfd
          fdfgdsogf osd gufosudgf ugf ousd gf ousdgf dos
          gfodsgfo udsgf ousdgfdgfitsdgfbytsdgfbuysgdf uy gdsuyfgadbftdft 8dagftb8atf87abtf8t7lorem100
          sadugsaidugsaiudgisaugd isugds
          ad agf sd giosdgf 
          gisd f
          psd gfpidsgf pisdg fipgsd fgids gfi dsofg odsugfd
          fdfgdsogf osd gufosudgf ugf ousd gf ousdgf dos
          gfodsgfo udsgf ousdgfdgfitsdgfbytsdgfbuysgdf uy gdsuyfgadbftdft 8dagftb8atf87abtf8t7lorem100
          sadugsaidugsaiudgisaugd isugds
          ad agf sd giosdgf 
          gisd f
          psd gfpidsgf pisdg fipgsd fgids gfi dsofg odsugfd
          fdfgdsogf osd gufosudgf ugf ousd gf ousdgf dos
          gfodsgfo udsgf ousdgfdgfitsdgfbytsdgfbuysgdf uy gdsuyfgadbftdft 8dagftb8atf87abtf8t7lorem100
          sadugsaidugsaiudgisaugd isugds
          ad agf sd giosdgf 
          gisd f
          psd gfpidsgf pisdg fipgsd fgids gfi dsofg odsugfd
          fdfgdsogf osd gufosudgf ugf ousd gf ousdgf dos
          gfodsgfo udsgf ousdgfdgfitsdgfbytsdgfbuysgdf uy gdsuyfgadbftdft 8dagftb8atf87abtf8t7lorem100
          sadugsaidugsaiudgisaugd isugds
          ad agf sd giosdgf 
          gisd f
          psd gfpidsgf pisdg fipgsd fgids gfi dsofg odsugfd
          fdfgdsogf osd gufosudgf ugf ousd gf ousdgf dos
          gfodsgfo udsgf ousdgfdgfitsdgfbytsdgfbuysgdf uy gdsuyfgadbftdft 8dagftb8atf87abtf8t7lorem100
          sadugsaidugsaiudgisaugd isugds
          ad agf sd giosdgf 
          gisd f
          psd gfpidsgf pisdg fipgsd fgids gfi dsofg odsugfd
          fdfgdsogf osd gufosudgf ugf ousd gf ousdgf dos
          gfodsgfo udsgf ousdgfdgfitsdgfbytsdgfbuysgdf uy gdsuyfgadbftdft 8dagftb8atf87abtf8t7
        </p>
        <a target="_blank" ref={linkref}>learn react</a>
        
        
   
    </>
  );
}

export default App;
