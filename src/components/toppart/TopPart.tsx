import "./topPart.css";
import {motion} from "framer-motion";

function TopPart(){

     return(
          <div className="top-part">
               <motion.div 
                         initial="hidden"
                         whileInView="visible"
                         viewport={{ once: true, amount: 0.5 }}
                         transition={{ delay: 0.2, duration: 1.5 }}
                         variants={{
                         hidden: { opacity: 0, x: -50 },
                         visible: { opacity: 1, x: 0 },
                    }}
               > 
                    <div className="left-part">
                         <h3>Olá, meu nome é</h3>
                         <h2>Mario Frederico Castilho</h2>
                         <h6>Sou um desenvovledor web apaixonado por tecnologia que sempre busca aprender e aprimorar as aptidões.</h6>
                         {/* <ul>
                              <li><a href="https://github.com/mfcastilho" target="_blank">Github</a></li>
                              <li><a href="https://www.linkedin.com/feed/" target="_blank">Linkedin</a></li>
                              <li><a href="">Instagram</a></li>
                              <li><a href="">Currículo</a></li>
                         </ul> */}
                    </div>
               </motion.div>
               <div className="right-part">
                    <img src="../../../public/profile-images/mario-frederico.png" alt="" />
               </div>
          </div>
     );
}

export default TopPart;