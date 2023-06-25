import './App.css';

import TopPart from './components/toppart/TopPart';
import AboutMe from './components/aboutme/AboutMe';
import Skills from './components/skills/Skills';
import AcademicBackground from './components/academic-background/AcademicBackground';
// import MyProjects from './components/my-projects/MyProjects';
// import Contact from './components/contact/Contact';

function App() {

     return (
          <div className='app'>
               <TopPart />
               <AboutMe />
               <Skills />
               <AcademicBackground />
               {/* <MyProjects />
               <Contact/> */}
          </div>
     )
}

export default App;
