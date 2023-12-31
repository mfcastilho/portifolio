import { motion } from "framer-motion";
import "glider-js/glider.min.css";
import "./myProjects.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

function MyProjects(){


     return(
          <motion.div className="my-projects" id="my-projects">
               <motion.h2 className="my-projects__title"
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: true, amount: 0.5 }}
                     transition={{ delay: 0.2, duration: 1.5 }}
                     variants={{
                          hidden: { opacity: 0, y: 2 },
                          visible: { opacity: 1, y: 0 },
                     }}
               >Meus projetos</motion.h2>

                {/* Mobile Elements*/}         
               <div className="my-projects__container">
                    
                    
                    <motion.div className="my-projects__icons-box"
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{ delay: 0.2, duration: 1.5 }}
                          variants={{
                               hidden: { opacity: 0, y: 2 },
                               visible: { opacity: 1, y: 0 },
                          }}
                    >

                         
                         <div className="my-projects__my-projects__image-box">
                              <img src="../../../public/projects-images/flamengo-crf-icon-carrosel.png" alt="" title="" />
                         </div>
                         
                         <div className="my-projects__description">
                              <h3>API do Flamengo</h3>
                              <p>API  que disponibiliza dados históricos sobre o Clube de Regatas do Flamengo.</p>
                              <div className="my-projects__used-project-tech">
                                   <p>JavaScript</p>
                                   <FontAwesomeIcon icon={faCircle} className="bullet" />
                                   <p>NodeJs</p>
                                   <FontAwesomeIcon icon={faCircle} className="bullet" />
                                   <p>ExpressJs</p>
                                   <FontAwesomeIcon icon={faCircle} className="bullet" />
                                   <p>SequelizeJs</p>
                                   <FontAwesomeIcon icon={faCircle} className="bullet" />
                                   <p>Postgres</p> 
                              </div>
                              <div className="my-projects__btns-project-description-box">
                                   <a href="https://github.com/mfcastilho/API-do-Flamengo" target="_blank">Repositório</a>
                                   <a href="https://flamengo-api.cyclic.app/v1/api-docs/" target="_blank">Documentação</a>
                              </div>
                         </div>

                         
                    </motion.div>

                     
                    <motion.div className="my-projects__icons-box"
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{ delay: 0.2, duration: 1.5 }}
                          variants={{
                               hidden: { opacity: 0, y: 2 },
                               visible: { opacity: 1, y: 0 },
                          }}

                          
                    >
                          <div className="my-projects__image-box">
                              <img src="../../../public/projects-images/findmovie-image-carrosel.png" alt="" title="" />
                         </div>
                                            
                         <div className="my-projects__description my-projects__left-description">
                              <h3>Find Movies</h3>
                              <p>Aplicação Frontend que busca informações de filmes  de forma dinâmica. </p>
                              <div className="my-projects__used-project-tech">
                                   <p>TypeScript</p>
                                   <FontAwesomeIcon icon={faCircle} className="bullet" />
                                   <p>ReactJs</p>
                                   <FontAwesomeIcon icon={faCircle} className="bullet" />
                                   <p>Hooks</p>
                                   <FontAwesomeIcon icon={faCircle} className="bullet" />
                                   <p>Axios</p> 
                              </div>
                              <div className="my-projects__btns-project-description-box">
                                   <a href="https://github.com/mfcastilho/findMovie" target="_blank">Repositório</a>
                                   <a href="https://finding-movies.netlify.app/" target="_blank">Deploy</a>
                              </div>
                         </div>
                         
                             
                    </motion.div>

                    <motion.div className="my-projects__icons-box"
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{ delay: 0.2, duration: 1.5 }}
                          variants={{
                               hidden: { opacity: 0, y: 2 },
                               visible: { opacity: 1, y: 0 },
                          }}
                    >
                         
                         <div className="my-projects__image-box">
                              <img src="../../../public/projects-images/restCountryApi-carrossel.png" alt="" title="" />
                         </div>
                         
                         <div className="my-projects__description">
                              <h3>Rest Country API</h3>
                              <p>Aplicação Frontend que busca informações de filmes  de forma dinâmica. </p>
                              <div className="my-projects__used-project-tech">
                                   <p>JavaScript</p>
                                   <FontAwesomeIcon icon={faCircle} className="bullet" />
                                   <p>ReactJs</p>
                                   <FontAwesomeIcon icon={faCircle} className="bullet" />
                                   <p>Context API</p>
                                   <FontAwesomeIcon icon={faCircle} className="bullet" />
                                   <p>Axios</p> 
                              </div>
                              <div className="my-projects__btns-project-description-box">
                                   <a href="https://github.com/mfcastilho/restCountryAPI" target="_blank">Repositório</a>
                                   <a href="https://findyourcountryinfos.netlify.app/" target="_blank">Deploy</a>
                              </div>
                         </div>

                    </motion.div>

                    <motion.div className="my-projects__icons-box"
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{ delay: 0.2, duration: 1.5 }}
                          variants={{
                               hidden: { opacity: 0, y: 2 },
                               visible: { opacity: 1, y: 0 },
                          }}
                    >

                         <div className="my-projects__image-box">
                              <img src="../../../public/projects-images/decodificador-one-oracle-next-education-carrosel.png" alt="" title="" />
                         </div>
                         <div className="my-projects__description my-projects__left-description">
                              <h3>Decodificador de Textos</h3>
                              <p>Aplicação Frontend que criptografa e descriptografa textos.</p>
                              <div className="my-projects__used-project-tech">
                                   <p>Javascript</p>
                                   <FontAwesomeIcon icon={faCircle} className="bullet" />
                                   <p>HTML</p>
                                   <FontAwesomeIcon icon={faCircle} className="bullet" />
                                   <p>CSS</p> 
                              </div>
                              <div className="my-projects__btns-project-description-box">
                                   <a href="https://github.com/mfcastilho/decodificador-one-oracle-next-education" target="_blank">Repositório</a>
                                   <a href="https://mfcastilho.github.io/decodificador-one-oracle-next-education/" target="_blank">Deploy</a>
                              </div>
                         </div>
                                                                          
                    </motion.div>

               </div>

                {/* Desktop Elements*/}         
               <div className="my-projects__container-desktop">
                    
                    
                    <motion.div className="my-projects__icons-box"
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{ delay: 0.2, duration: 1.5 }}
                          variants={{
                               hidden: { opacity: 0, y: 2 },
                               visible: { opacity: 1, y: 0 },
                          }}
                    >

                         
                         <div className="my-projects__image-box">
                              <img src="../../../public/projects-images/flamengo-crf-icon-carrosel.png" alt="" title="" />
                         </div>
                         
                         <div className="my-projects__description">
                              <h3>API do Flamengo</h3>
                              <p>API  que disponibiliza dados históricos sobre o Clube de Regatas do Flamengo.</p>
                              <div className="my-projects__used-project-tech">
                                   <p>JavaScript</p>
                                   <FontAwesomeIcon icon={faCircle} className="bullet" />
                                   <p>NodeJs</p>
                                   <FontAwesomeIcon icon={faCircle} className="bullet" />
                                   <p>ExpressJs</p>
                                   <FontAwesomeIcon icon={faCircle} className="bullet" />
                                   <p>SequelizeJs</p>
                                   <FontAwesomeIcon icon={faCircle} className="bullet" />
                                   <p>Postgres</p> 
                              </div>
                              <div className="my-projects__btns-project-description-box">
                                   <a href="https://github.com/mfcastilho/API-do-Flamengo" target="_blank">Repositório</a>
                                   <a href="https://flamengo-api.cyclic.app/v1/api-docs/" target="_blank">Documentação</a>
                              </div>
                         </div>

                         
                    </motion.div>

                     
                    <motion.div className="my-projects__icons-box"
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{ delay: 0.2, duration: 1.5 }}
                          variants={{
                               hidden: { opacity: 0, y: 2 },
                               visible: { opacity: 1, y: 0 },
                          }}
                    >
                         <div className="my-projects__description my-projects__left-description">
                              <h3>Find Movies</h3>
                              <p>Aplicação Frontend que busca informações de filmes  de forma dinâmica. </p>
                              <div className="my-projects__used-project-tech">
                                   <p>TypeScript</p>
                                   <FontAwesomeIcon icon={faCircle} className="bullet" />
                                   <p>ReactJs</p>
                                   <FontAwesomeIcon icon={faCircle} className="bullet" />
                                   <p>Hooks</p>
                                   <FontAwesomeIcon icon={faCircle} className="bullet" />
                                   <p>Axios</p> 
                              </div>
                              <div className="my-projects__btns-project-description-box">
                                   <a href="https://github.com/mfcastilho/findMovie" target="_blank">Repositório</a>
                                   <a href="https://finding-movies.netlify.app/" target="_blank">Deploy</a>
                              </div>
                         </div>
                         
                         <div className="my-projects__image-box">
                              <img src="../../../public/projects-images/findmovie-image-carrosel.png" alt="" title="" />
                         </div>
                         
                        

                         
                    </motion.div>

                    <motion.div className="my-projects__icons-box"
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{ delay: 0.2, duration: 1.5 }}
                          variants={{
                               hidden: { opacity: 0, y: 2 },
                               visible: { opacity: 1, y: 0 },
                          }}
                    >
                         
                         <div className="my-projects__image-box">
                              <img src="../../../public/projects-images/restCountryApi-carrossel.png" alt="" title="" />
                         </div>
                         
                         <div className="my-projects__description">
                              <h3>Rest Country API</h3>
                              <p>Aplicação Frontend que busca informações de filmes  de forma dinâmica. </p>
                              <div className="my-projects__used-project-tech">
                                   <p>JavaScript</p>
                                   <FontAwesomeIcon icon={faCircle} className="bullet" />
                                   <p>ReactJs</p>
                                   <FontAwesomeIcon icon={faCircle} className="bullet" />
                                   <p>Context API</p>
                                   <FontAwesomeIcon icon={faCircle} className="bullet" />
                                   <p>Axios</p> 
                              </div>
                              <div className="my-projects__btns-project-description-box">
                                   <a href="https://github.com/mfcastilho/restCountryAPI" target="_blank">Repositório</a>
                                   <a href="https://findyourcountryinfos.netlify.app/" target="_blank">Deploy</a>
                              </div>
                         </div>

                    </motion.div>

                    <motion.div className="my-projects__icons-box"
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{ delay: 0.2, duration: 1.5 }}
                          variants={{
                               hidden: { opacity: 0, y: 2 },
                               visible: { opacity: 1, y: 0 },
                          }}
                    >
                         <div className="my-projects__description my-projects__left-description">
                              <h3>Decodificador de Textos</h3>
                              <p>Aplicação Frontend que criptografa e descriptografa textos.</p>
                              <div className="my-projects__used-project-tech">
                                   <p>Javascript</p>
                                   <FontAwesomeIcon icon={faCircle} className="bullet" />
                                   <p>HTML</p>
                                   <FontAwesomeIcon icon={faCircle} className="bullet" />
                                   <p>CSS</p> 
                              </div>
                              <div className="my-projects__btns-project-description-box">
                                   <a href="https://github.com/mfcastilho/decodificador-one-oracle-next-education" target="_blank">Repositório</a>
                                   <a href="https://mfcastilho.github.io/decodificador-one-oracle-next-education/" target="_blank">Deploy</a>
                              </div>
                         </div>
                         
                         <div className="my-projects__image-box">
                              <img src="../../../public/projects-images/decodificador-one-oracle-next-education-carrosel.png" alt="" title="" />
                         </div>
                         
                         

                         
                    </motion.div>

               </div>           
             
          </motion.div>
     );
}

export default MyProjects;