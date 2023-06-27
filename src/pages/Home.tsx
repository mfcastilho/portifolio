import TopPart from '../components/toppart/TopPart';
import AboutMe from '../components/aboutme/AboutMe';
import Skills from '../components/skills/Skills';
import AcademicBackground from '../components/academic-background/AcademicBackground';
import MyProjects from '../components/my-projects/MyProjects';
import Contact from '../components/contact/Contact';

function Home(){
     return(
          <div className="home">
               <TopPart />
               <AboutMe />
               <Skills />
               <AcademicBackground />
               <MyProjects />
               <Contact/>
          </div>
     );
}

export default Home;