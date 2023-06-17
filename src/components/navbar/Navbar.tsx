import "./navbar.css";
import { motion } from "framer-motion";


function Navbar(){



     return(
          <div className="navbar">
                    
                    <div className="right-part">
                         <h1>Portifólio</h1>
                    </div>
                    
                    <div className="left-part">
                              <ul>
                                   <li>Sobre mim</li>
                                   <li>Formação</li>
                                   <li>Projetos</li>
                              </ul>

                    </div>
             
          </div>
     );
}

export default Navbar;