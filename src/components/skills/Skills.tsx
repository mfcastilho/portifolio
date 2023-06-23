import "./skills.css";
import { motion } from "framer-motion";

function Skills(){

     

     return(
          <motion.div className="skills" id="skills"
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.5 }}
               transition={{ delay: 0.2, duration: 1.5 }}
               variants={{
                    hidden: { opacity: 0, y: 2 },
                    visible: { opacity: 1, y: 0 },
               }}
          >
               
                    
                    <h2>Skills</h2>
                    <div className="skills-description"
                         
                    >
                         <motion.div className="skills-icons-box"
                               whileHover={{ scale: 1.05 }} 
                               transition={{ duration: 0.3 }}
                         >
                              <img src="../../../public/icons/typescript_original_logo_icon_146317.svg" alt="typescript icon" title="typescript" />
                         </motion.div>
                         <motion.div className="skills-icons-box"
                               whileHover={{ scale: 1.05 }} 
                               transition={{ duration: 0.3 }}
                         >
                              <img src="../../../public/icons/javascript_original_logo_icon_146455.svg" alt="javascript icon" title="javascript" />
                         </motion.div>
                         <motion.div className="skills-icons-box background-icon"
                               whileHover={{ scale: 1.05 }} 
                               transition={{ duration: 0.3 }}
                         >
                              <img className="redimention-icon" src="../../../public/icons/file_type_reactjs_icon_130205.svg" alt="reactjs icon" title="reactjs" />
                         </motion.div>
                         <motion.div className="skills-icons-box background-icon"
                               whileHover={{ scale: 1.05 }} 
                               transition={{ duration: 0.3 }}
                         >
                              <img src="../../../public/icons/nodejs_plain_logo_icon_146409.svg" alt="nodejs icon" title="nodejs" />
                         </motion.div>
                         
                         <motion.div className="skills-icons-box background-icon"
                               whileHover={{ scale: 1.05 }} 
                               transition={{ duration: 0.3 }}
                         >
                              <img className="redimention-icon" src="../../../public/icons/express-js-icon.svg" alt="expressjs icon" title="expressjs" />
                         </motion.div>
                         <motion.div className="skills-icons-box background-icon"
                               whileHover={{ scale: 1.05 }} 
                               transition={{ duration: 0.3 }}
                         >
                              <img className="redimention-icon" src="../../../public/icons/sequelizejs_logo_icon_170747.svg" alt="sequelizejs icon" title="sequelizejs" />
                         </motion.div>
                         <motion.div className="skills-icons-box background-icon mysql-icon"
                               whileHover={{ scale: 1.05 }} 
                               transition={{ duration: 0.3 }}
                         >
                              <img className="mysql-icon-image" src="../../../public/icons/mysql-seeklogo.com.svg" alt="mysql icon" title="mysql" />
                         </motion.div>
                         <motion.div className="skills-icons-box background-icon"
                               whileHover={{ scale: 1.05 }} 
                               transition={{ duration: 0.3 }}
                         >
                              <img className="postgres-icon" src="../../../public/icons/postgresql-icon.svg" alt="postgres icon" title="postgres" />
                         </motion.div>
                         
    
                    </div>
               
          </motion.div>
     );
}

export default Skills;