import "./navbar.css";

function Navbar(){



     return(
          <div className="navbar">
                    
               <div className="navbar-container">
                    <div className="left-part ">
                         <ul>
                              <li ><a href="#about-me">Sobre mim</a></li>
                              <li><a href="#skills">Skills</a></li>
                              <li><a href="#training">Formação</a></li>
                              <li ><a href="#my-projects">Projetos</a></li>
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