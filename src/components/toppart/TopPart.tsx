import "./topPart.css";
import {motion} from "framer-motion";
import { animateScroll as scroll } from 'react-scroll';
import {useState, useEffect} from "react";

function TopPart(){

     const [isScrolling, setIsScrolling] = useState(false);

     useEffect(() => {
          let timeoutId:any;
        
          const handleScroll = () => {
            setIsScrolling(true);
        
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
              setIsScrolling(false);
            }, 300);
          };
        
          window.addEventListener('scroll', handleScroll);
          return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timeoutId);
          };
        }, []);

     function handleClick(sectionId: string){
          console.log(sectionId);
          const element = document.getElementById(sectionId);
          if(element){
               const offsetTop = element.offsetTop;
               scroll.scrollTo(offsetTop, {
                    duration: 700,
                    smooth: true,
               });
          } 
     }
     
     return(
          <div className="top-part">
               <div className={`navbar ${isScrolling ? 'hidden' : 'visible'}`}>
                    
                    <div className="navbar-container">
                         <div className="left-part ">
                              <ul>
                                   <li ><a href="#about-me" onClick={()=> handleClick("about-me")}>Sobre mim</a></li>
                                   <li><a href="#skills" onClick={()=> handleClick("skills")}>Skills</a></li>
                                   <li><a href="#training" onClick={()=> handleClick("training")}>Formação</a></li>
                                   <li ><a href="#my-projects" onClick={()=> handleClick("my-projects")}>Projetos</a></li>
                                   <li ><a href="#contact" onClick={()=> handleClick("contact")}>Contatos</a></li>
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
               <div className="top-part-container">
                    
                    <motion.div 
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ amount: 0.5 }}
                              transition={{ delay: 0.2, duration: 1.5 }}
                              variants={{
                              hidden: { opacity: 0, x: -50 },
                              visible: { opacity: 1, x: 0 },
                              }}
                    > 
                         <div className="left-part">
                              <h3>Olá, meu nome é</h3>
                              <h2>Mario Frederico Castilho</h2>
                              <h6>Sou um desenvolvedor web apaixonado por tecnologia que sempre busca aprender e aprimorar as aptidões.</h6>
                         </div>

                    </motion.div>
                    
                    <div className="right-part">
                         <img src="../../../public/profile-images/mario-foto-linkedin.png" alt="" />
                    </div>
               </div>
          </div>
          
     );
}

export default TopPart;