import "./aboutMe.css";
import { motion } from "framer-motion";

function AboutMe(){
     return(
          <div className="about-me" id="about-me">
               <motion.div 
                         animate= {{scale:1}}
                         initial={{scale: 0.9}}
                         transition={{duration: 1.5}}         
               >
                    <h2>Sobre mim</h2>
                    <div className="about-me-description">
                         <p>" Graduado em análise e desenvolvimento de sistemas pela Unicesumar e formado no curso de desenvolvimento web fullstack pela Digital House, atualmente sou aluno dos programas One Oracle Next Education - Especialização em Frontend , fornecido pela Alura em parceria com a Oracle e do 1000 bolsas iFood - Especialização em Backend, fornecido pela Cubos Academy em parceria com o iFood "</p>
                    </div>
               </motion.div>
          </div>
     );
}

export default AboutMe;