import "./topPart.css";
import {motion} from "framer-motion";

function TopPart(){

     return(
          <div className="top-part">
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
                    <div className="left-part">
                         <h2>Olá, meu nome é Mario Frederico</h2>
                         <h6>Sou Desenvovledor Web</h6>
                         <ul>
                              <li><a href="https://github.com/mfcastilho" target="_blank">Github</a></li>
                              <li><a href="https://www.linkedin.com/feed/" target="_blank">Linkedin</a></li>
                              <li><a href="">Instagram</a></li>
                              <li><a href="">Currículo</a></li>
                         </ul>
                    </div>
               </motion.div>
               <div className="right-part">
                    <img src="../../../public/mario-foto-linkedin.png" alt="" />
               </div>
          </div>
     );
}

export default TopPart;