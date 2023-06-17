import "./navbar.css";
import { motion } from "framer-motion";


function Navbar(){



     return(
          <div className="navbar">
               <motion.div 
                         initial="hidden"
                         whileInView="visible"
                         viewport={{ once: true, amount: 0.5 }}
                         transition={{ delay: 0.2, duration: 0.5 }}
                         variants={{
                         hidden: { opacity: 0, x: -50 },
                         visible: { opacity: 1, x: 0 },
                    }}
               >         
                    <div className="right-part">
                         <h1>Portifólio</h1>
                    </div>
                    
                    
               </motion.div>

               <motion.div 
                         initial="hidden"
                         whileInView="visible"
                         viewport={{ once: true, amount: 0.5 }}
                         transition={{ delay: 0.2, duration: 0.5 }}
                         variants={{
                         hidden: { opacity: 0, x: 50 },
                         visible: { opacity: 1, x: 0 },
                    }}
               >

                    <div className="left-part">
                              <ul>
                                   <li>Sobre mim</li>
                                   <li>Formação</li>
                                   <li>Projetos</li>
                              </ul>

                    </div>
               </motion.div>
          </div>
     );
}

export default Navbar;