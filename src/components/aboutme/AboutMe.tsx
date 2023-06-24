import "./aboutMe.css";
import { motion } from "framer-motion";

function AboutMe(){
     return(
          <motion.div className="about-me" id="about-me"
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.5 }}
               transition={{ delay: 0.2, duration: 1.5 }}
               variants={{
                    hidden: { opacity: 0, y: 2 },
                    visible: { opacity: 1, y: 0 },
               }}
          
          >
               <div>
                    <h2>Sobre mim</h2>
                    <div className="about-me-description">
                         
                         <p>"Sou graduado em análise e desenvolvimento de sistemas pela Unicesumar e formado no curso de desenvolvimento web fullstack pela Digital House. "</p>

                         <p>" Atualmente sou aluno do programa One Oracle Next Education especialização Frontend, fornecido pela Alura e do programa 1000 bolsas iFood especialização Backend, fornecido pela Cubos Academy. "</p>

                         <p>" Tenho conhecimento técnico em Typescript, JavaScript, Node.js, Express, Sequelize, bancos de dados relacionais, React, HTML, CSS, além de familiaridade com Java e Spring Boot. "</p>

                         <p>" Sou proativo, comunicativo, disciplinado e organizado. Tenho habilidade em pesquisar soluções e estou sempre aberto para aprender, evoluir e ajudar. "</p>
                    </div>
               </div>
          </motion.div>
     );
}

export default AboutMe;