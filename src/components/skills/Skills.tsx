import "./skills.css";
import { motion } from "framer-motion";

function Skills(){
     return(
          <div className="skills" id="skills">
               
               <motion.div 
                         animate= {{scale:1}}
                         initial={{scale: 0.9}}
                         transition={{duration: 1.5}}         
               >
                    <h2>Skills</h2>
                    <div className="skills-description">
                         <div className="skills-icons-box">
                              <img src="../../../public/icons/typescript-icon.svg" alt="typescript icon" title="typescript" />
                         </div>
                         <div className="skills-icons-box">
                              <img src="../../../public/icons/javascript-icon.svg" alt="javascript icon" title="javascript" />
                         </div>
                         <div className="skills-icons-box background-icon">
                              <img className="redimention-icon" src="../../../public/icons/react-icon.svg" alt="reactjs icon" title="reactjs" />
                         </div>
                         <div className="skills-icons-box background-icon">
                              <img src="../../../public/icons/nodejs-icon.svg" alt="nodejs icon" title="nodejs" />
                         </div>
                         
                         <div className="skills-icons-box background-icon">
                              <img className="redimention-icon" src="../../../public/icons/express-js-icon.svg" alt="expressjs icon" title="expressjs" />
                         </div>
                         <div className="skills-icons-box background-icon">
                              <img className="redimention-icon" src="../../../public/icons/sequelize-icon.svg" alt="sequelizejs icon" title="sequelizejs" />
                         </div>
                         <div className="skills-icons-box background-icon">
                              <img src="../../../public/icons/mysql-icon.svg" alt="mysql icon" title="mysql" />
                         </div>
                         <div className="skills-icons-box background-icon">
                              <img src="../../../public/icons/postgres-icon.svg" alt="postgres icon" title="postgres" />
                         </div>
                         
    
                    </div>
               </motion.div>
          </div>
     );
}

export default Skills;