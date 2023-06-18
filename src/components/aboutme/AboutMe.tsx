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
                         <p>" Formado em análise e desenvolvimento de sistemas, atualmente sou aluno da formação One - Oracle Next Education fornecido pela Alura em parceria com a Oracle. Os tópicos abordados pela formação são: Css, Javascript e Java. "</p>
                    </div>
               </motion.div>
          </div>
     );
}

export default AboutMe;