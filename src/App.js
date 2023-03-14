

import Intro from './components/Intro';
import ClassComponents from './components/classComponents';
// funsional components
import MyButton from './components/MyButton';
import Navbar from './components/Navbar';

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

  return (
    <>
      {/* intro di panggil  */}

      <p>ini function components</p>
      <Intro name="afifah"/>
      <Intro  name="meyzan"/>

      <p>ini class components</p>
      <ClassComponents paragraf={paragraf}/>

      <MyButton clicked={clicked}/>

      <Navbar test={navText} />

      
     
    </>
  );
}

export default App;
