import './App.css';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import TopPart from './components/toppart/TopPart';
import AboutMe from './components/aboutme/AboutMe';
import Skills from './components/skills/Skills';
import AcademicBackground from './components/academic-background/AcademicBackground';
import MyProjects from './components/my-projects/MyProjects';
import Footer from './components/footer/Footer';

function App() {

     return (
          <div className='app'>
               <Navbar />
               <TopPart />
               <AboutMe />
               <Skills />
               <AcademicBackground />
               <MyProjects />
               <Footer />
          </div>
     )
}

export default App;
