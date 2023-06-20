import "./navbar.css";
import { animateScroll as scroll } from 'react-scroll';

function Navbar(){

     function handleClick(sectionId: string){
          const element = document.getElementById(sectionId);
          if(element){
               const offsetTop = element.offsetTop;
               scroll.scrollTo(offsetTop, {
                    duration: 500,
                    smooth: true,
               });
          }
          
     }

     return(
          <div className="navbar">
                    
               <div className="navbar-container">
                    <div className="left-part ">
                         <ul>
                              <li ><a href="#about-me" onClick={()=> handleClick("about-me")}>Sobre mim</a></li>
                              <li><a href="#skills" onClick={()=> handleClick("skills")}>Skills</a></li>
                              <li><a href="#training" onClick={()=> handleClick("training")}>Formação</a></li>
                              <li ><a href="#my-projects" onClick={()=> handleClick("my-projects")}>Projetos</a></li>
                         </ul>
                    </div>
                    
                    <div className="right-part">
                         <a href="https://github.com/mfcastilho" target="_blank">
                              <div className="social-media-icons-box">
                              <img src="../../../public/icons/github-icon.svg" alt="" className="github-icon" />   
                              </div>
                         </a>
                         <a href="https://www.linkedin.com/in/mariofrederico/" target="_blank">
                              <div className="social-media-icons-box">
                              <img src="../../../public/icons/linkedin-icon.svg" alt="" className="github-icon" />   
                              </div>
                         </a>
                         <a href="https://www.instagram.com/mffredericofrederico/" target="_blank">
                              <div className="social-media-icons-box">
                              <img src="../../../public/icons/instagram-icon.svg" alt="" className="github-icon" />   
                              </div>
                         </a>                           
                    </div>
               </div>     
             
          </div>
     );
}

export default Navbar;