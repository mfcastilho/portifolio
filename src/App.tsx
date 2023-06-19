import './App.css';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import TopPart from './components/toppart/TopPart';
import AboutMe from './components/aboutme/AboutMe';
import Skills from './components/skills/Skills';
import AcademicBackground from './components/academic-background/AcademicBackground';
import MyProjects from './components/my-projects/MyProjects';

function App() {

     return (
          <div className='app'>
               <Navbar />
               <TopPart />
               <AboutMe />
               <Skills />
               <AcademicBackground />
               <MyProjects />
               <Home />
          </div>
     )
}

export default App;
