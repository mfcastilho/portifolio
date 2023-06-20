import "./topPart.css";
import {motion} from "framer-motion";

function TopPart(){

     
     return(
          <div className="top-part">
               <motion.div 
                         initial="hidden"
                         whileInView="visible"
                         viewport={{ amount: 0.9 }}
                         transition={{ delay: 0.2, duration: 1.5 }}
                         variants={{
                         hidden: { opacity: 0, x: -50 },
                         visible: { opacity: 1, x: 0 },
                    }}
               > 
                    <div className="left-part">
                         <h3>Olá, meu nome é</h3>
                         <h2>Mario Frederico Castilho</h2>
                         <h6>Sou um desenvolvedor web apaixonado por tecnologia que sempre busca aprender e aprimorar as aptidões.</h6>
                    </div>
               </motion.div>
               <div className="right-part">
                    <img src="../../../public/profile-images/mario-frederico.png" alt="" />
               </div>
          </div>
     );
}

export default TopPart;