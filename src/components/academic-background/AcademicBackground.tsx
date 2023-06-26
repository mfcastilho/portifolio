import "./academicBackground.css";
import { motion } from "framer-motion";


function AcademicBackground(){
     
     return(
          <motion.div className="academic-background" id="training"
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.5 }}
               transition={{ delay: 0.2, duration: 1.5 }}
               variants={{
                    hidden: { opacity: 0, y: 2 },
                    visible: { opacity: 1, y: 0 },
               }}
          >
               <h2 className="academic-background__title">Formação</h2>
               <div className="academic-background__container">
                    
                    <motion.div className="academic-background__icons-box"
                         whileHover={{ scale: 1.05 }} 
                         transition={{ duration: 0.3 }}
                    >
                         <img src="../../../public/icons/unicesumar-icon.svg" alt="" title="" />
                         <div className="academic-background__description">
                              <p>Análise e Desenvolvimento de Sistemas</p>
                              <p>Concluído - Novembro de 2022</p>
                         </div>
                    </motion.div>
                    
                    <motion.div className="academic-background__icons-box"
                         whileHover={{ scale: 1.05 }} 
                         transition={{ duration: 0.3 }}
                    >
                         <img className="digital-house-icon" src="../../../public/icons/digital-house-icon2.svg" alt="" title="" />
                         <div className="academic-background__description">
                              <p>Desenvolvimento Web Fullsatck</p>
                              <p>Concluído - Abril de 2023</p>
                         </div>
                    </motion.div>
                    <motion.div className="academic-background__icons-box"
                         whileHover={{ scale: 1.05 }} 
                         transition={{ duration: 0.3 }}
                    >
                         <img src="../../../public/icons/alura-icon.svg" alt="" title="" />
                         <div className="academic-background__description">
                              <p>One Oracle Next Education (Especialização Frontend)</p>
                              <p>Em andamento - Outubro de 2023</p>
                         </div>
                    </motion.div>
                    <motion.div className="academic-background__icons-box"
                         whileHover={{ scale: 1.05 }} 
                         transition={{ duration: 0.3 }}
                    >
                         <img src="../../../public/icons/cubos-academy-icon-.svg" alt="" title="" />
                         <div className="academic-background__description">
                              <p>1000 Bolsas iFood  (Especialização Backend)</p>
                              <p>Em andamento - Outubro de 2023</p>
                         </div>
                    </motion.div>
               </div>
          </motion.div>
     );
}

export default AcademicBackground;