import './App.css';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import TopPart from './components/toppart/TopPart';
import AboutMe from './components/aboutme/AboutMe';
import Skills from './components/skills/Skills';

function App() {

     return (
          <div className='app'>
               <Navbar />
               <TopPart />
               <AboutMe />
               <Skills />
               <Home />
          </div>
     )
}

export default App;
