import "./topPart.css";
import {motion} from "framer-motion";
import { animateScroll as scroll } from 'react-scroll';
import {useState, useEffect} from "react";


function TopPart(){

     const [isScrolling, setIsScrolling] = useState(false);
     const [showMenuMobileElements, setShowMenuMobileElements] = useState(false);


     const downloadCV = () => {
          const fileUrl = '../../../public/Mario_frederico_curriculo-fullstack.pdf'; // Caminho do currículo

          const link = document.createElement('a');
          link.href = fileUrl;
          link.target = '_blank';
          link.download = 'curriculo-mariofrederico.pdf'; // Nome do arquivo de download

          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
     };

     useEffect(() => {
          let timeoutId:number;
        
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

          const menuMobileElements:HTMLElement | null = document.querySelector(".navbar__menu-mobile-elements__container");

          const menuMobile:HTMLElement | null= document.querySelector(".navbar__menu-burguer");   

          if(menuMobileElements != null) menuMobileElements.style.display = "none";  

          const element = document.getElementById(sectionId);
          
          if(element){
               const offsetTop = element.offsetTop;
               scroll.scrollTo(offsetTop, {
                    duration: 700,
                    smooth: true,
               });
          } 
          
          setTimeout(()=>{
          if(window.innerWidth <= 960){
               if(menuMobile != null) menuMobile.style.display = "flex";
          }
          },300)
            
     }

     function selectMenuMobile(event:React.MouseEvent<HTMLElement>){
          event.preventDefault();
          console.log("Clicou");
          
          const menuMobileElements:HTMLElement | null = document.querySelector(".navbar__menu-mobile-elements__container");
          const menuMobile:HTMLElement | null= document.querySelector(".navbar__menu-burguer");
          
          if(menuMobile != null) menuMobile.style.display = "none";         
          if(menuMobileElements != null) menuMobileElements.style.display = "flex";     
     }

     function selectQuitButton(){
          const menuMobileElements:HTMLElement | null = document.querySelector(".navbar__menu-mobile-elements__container");
          const menuMobile:HTMLElement | null= document.querySelector(".navbar__menu-burguer");
          if(menuMobile != null) menuMobile.style.display = "flex";
          if(menuMobileElements != null){
               menuMobileElements.classList.add("animation--quit-menu-mobile");
               menuMobileElements.style.display = "none";  
               menuMobileElements.classList.remove("animation--quit-menu-mobile");
               
          }

          
     }

     useEffect(() => {
          function handleResize(){
               const menuMobile:HTMLElement | null= document.querySelector(".navbar__menu-burguer");
               const menuMobileElements:HTMLElement | null = document.querySelector(".navbar__menu-mobile-elements__container");
                    
               if(window.innerWidth <= 960){
                    setShowMenuMobileElements(true);
                    if(menuMobile != null) menuMobile.style.display = "flex";
                    
               }else if(window.innerWidth > 961){
                    setShowMenuMobileElements(false);
                    if(menuMobile != null) menuMobile.style.display = "none";
                    if(menuMobileElements != null) menuMobileElements.style.display = "none";
               }
          }
          handleResize();
          window.addEventListener('resize', handleResize);
          return () => {
            window.removeEventListener('resize', handleResize);
          };
     },[showMenuMobileElements]);
     
     return(
          <div className="top-part" id="home">

               <div className={`navbar ${isScrolling ? 'hidden' : 'visible'}`}>
                    <div className="navbar__container">
                    <div className="navbar__left-part">
                         <ul className="navbar__menu">
                              <li><a href="#home" onClick={() => handleClick("home")}>Home</a></li>
                              <li><a href="#about-me" onClick={() => handleClick("about-me")}>Sobre mim</a></li>
                              <li><a href="#skills" onClick={() => handleClick("skills")}>Skills</a></li>
                              <li><a href="#training" onClick={() => handleClick("training")}>Formação</a></li>
                              <li><a href="#my-projects" onClick={() => handleClick("my-projects")}>Projetos</a></li>
                              <li><a href="#contact" onClick={() => handleClick("contact")}>Contatos</a></li>
                         </ul>
                    </div>

                    <div className="navbar__right-part">
                         <div onClick={selectMenuMobile} className="navbar__menu-burguer">
                              <img src="../../../public/icons/menu-burguer.svg" alt="" />
                         </div>
                         
                         <motion.div className="navbar__menu-mobile-elements__container"
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ amount: 0.5 }}
                              transition={{ delay: 0.1, duration: 0.5 }}
                              variants={{
                              hidden: { opacity: 0, x: 20 },
                              visible: { opacity: 0.7, x: 0 },
                              }}
                         >
                              <ul className="navbar__menu-mobile-elements__list">
                                   <li><a href="#home" onClick={() => handleClick("home")}>Home</a></li>
                                   <li><a href="#about-me" onClick={() => handleClick("about-me")}>Sobre mim</a></li>
                                   <li><a href="#skills" onClick={() => handleClick("skills")}>Skills</a></li>
                                   <li><a href="#training" onClick={() => handleClick("training")}>Formação</a></li>
                                   <li><a href="#my-projects" onClick={() => handleClick("my-projects")}>Projetos</a></li>
                                   <li><a href="#contact" onClick={() => handleClick("contact")}>Contato</a></li>
                                   <li onClick={selectQuitButton} 
                                   >Sair</li>
                              </ul>
                              
                         </motion.div>

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

               
               <div className="top-part__container">
                    
                    <div className="top-part__right-part">
                              <img src="../../../public/profile-images/mario-foto-linkedin.png" alt="" />
                    </div>

                    <motion.div className="top-part__left-part-mobile"
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ amount: 0.5 }}
                              transition={{ delay: 0.2, duration: 1.5 }}
                              variants={{
                              hidden: { opacity: 0, y: -50 },
                              visible: { opacity: 1, x: 0 },
                              }}
                    > 
                         <div className="top-part__left-part">
                              <h3>Olá, meu nome é</h3>
                              <h2>Mario Frederico Castilho</h2>
                              <h6>Sou um desenvolvedor web apaixonado por tecnologia que sempre busca aprender e aprimorar as aptidões.</h6>
                         </div>

                         

                    </motion.div>

                    <motion.div className="top-part__left-part-desktop"
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ amount: 0.5 }}
                              transition={{ delay: 0.2, duration: 1.5 }}
                              variants={{
                              hidden: { opacity: 0, x: -50 },
                              visible: { opacity: 1, x: 0 },
                              }}
                    > 
                         <div className="top-part__left-part">
                              <h3>Olá, meu nome é</h3>
                              <h2>Mario Frederico Castilho</h2>
                              <h6>Sou um desenvolvedor web apaixonado por tecnologia que sempre busca aprender e aprimorar as aptidões.</h6>
                         </div>

                         

                    </motion.div>
                    
                    <div className="top-part__profile-image-desktop">
                              <img src="../../../public/profile-images/mario-foto-linkedin.png" alt="" />
                    </div>
                    
               </div>
               
               

               <div className="top-part__btn-download-curriculum__container">
                    <button className="top-part__btn-download-curriculum" onClick={downloadCV}>Download CV
                    </button>
                    
               </div>               
          </div>
          
     );
}

export default TopPart;