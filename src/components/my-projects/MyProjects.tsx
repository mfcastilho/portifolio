import "./myProjects.css";
import { motion } from "framer-motion";


function MyProjects(){

     

     return(
          <motion.div className="my-projects" id="my-projects">
               <motion.h2
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: true, amount: 0.5 }}
                     transition={{ delay: 0.2, duration: 1.5 }}
                     variants={{
                          hidden: { opacity: 0, y: 2 },
                          visible: { opacity: 1, y: 0 },
                     }}
               >Meus projetos</motion.h2>
               <div className="my-projects-container">
                    
                    
                    <motion.div className="my-projects-icons-box"
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{ delay: 0.2, duration: 1.5 }}
                          variants={{
                               hidden: { opacity: 0, y: 2 },
                               visible: { opacity: 1, y: 0 },
                          }}
                    >
                         
                         <div className="image-box">
                              <img src="../../../public/projects-images/flamengo-crf-icon.svg" alt="" title="" />
                         </div>
                         
                         <div className="my-projects-description">
                              <h3>API do Flamengo</h3>
                              <p>API  que disponibiliza dados históricos sobre o Clube de Regatas do Flamengo.</p>
                              <div className="used-project-tech">
                                   <p>JavaScript</p> *
                                   <p>NodeJs</p> *
                                   <p>ExpressJs</p> *
                                   <p>SequelizeJs</p> *
                                   <p>Postgres</p> 
                              </div>
                              <div className="btns-project-description-box">
                                   <a href="https://github.com/mfcastilho/API-do-Flamengo" target="_blank">Repositório</a>
                                   <a href="https://flamengo-api.cyclic.app/v1/api-docs/" target="_blank">Documentação</a>
                              </div>
                         </div>

                         
                    </motion.div>

                     
                    <motion.div className="my-projects-icons-box"
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{ delay: 0.2, duration: 1.5 }}
                          variants={{
                               hidden: { opacity: 0, y: 2 },
                               visible: { opacity: 1, y: 0 },
                          }}
                    >
                         <div className="my-projects-description left-description">
                              <h3>Find Movies</h3>
                              <p>Aplicação Frontend que busca informações de filmes  de forma dinâmica. </p>
                              <div className="used-project-tech">
                                   <p>TypeScript</p> *
                                   <p>ReactJs</p> *
                                   <p>Hooks</p> *
                                   <p>React Router Dom</p> *
                                   <p>Axios</p> 
                              </div>
                              <div className="btns-project-description-box">
                                   <a href="https://github.com/mfcastilho/findMovie" target="_blank">Repositório</a>
                                   <a href="https://finding-movies.netlify.app/" target="_blank">Deploy</a>
                              </div>
                         </div>
                         
                         <div className="image-box">
                              <img src="../../../public/projects-images/findmovie-image.svg" alt="" title="" />
                         </div>
                         
                        

                         
                    </motion.div>

                    <motion.div className="my-projects-icons-box"
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{ delay: 0.2, duration: 1.5 }}
                          variants={{
                               hidden: { opacity: 0, y: 2 },
                               visible: { opacity: 1, y: 0 },
                          }}
                    >
                         
                         <div className="image-box">
                              <img src="../../../public/projects-images/restCountryApi.svg" alt="" title="" />
                         </div>
                         
                         <div className="my-projects-description">
                              <h3>Rest Country API</h3>
                              <p>Aplicação Frontend que busca informações de filmes  de forma dinâmica. </p>
                              <div className="used-project-tech">
                                   <p>JavaScript</p> *
                                   <p>ReactJs</p> *
                                   <p>Context API</p> *
                                   <p>React Router Dom</p> *
                                   <p>Axios</p> 
                              </div>
                              <div className="btns-project-description-box">
                                   <a href="https://github.com/mfcastilho/restCountryAPI" target="_blank">Repositório</a>
                                   <a href="https://findyourcountryinfos.netlify.app/" target="_blank">Deploy</a>
                              </div>
                         </div>

                    </motion.div>

                    <motion.div className="my-projects-icons-box"
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{ delay: 0.2, duration: 1.5 }}
                          variants={{
                               hidden: { opacity: 0, y: 2 },
                               visible: { opacity: 1, y: 0 },
                          }}
                    >
                         <div className="my-projects-description left-description">
                              <h3>Decodificador de Textos</h3>
                              <p>Aplicação Frontend que criptografa e descriptografa textos.</p>
                              <div className="used-project-tech">
                                   <p>Javascript</p> *
                                   <p>HTML</p> *
                                   <p>CSS</p> *
                              </div>
                              <div className="btns-project-description-box">
                                   <a href="https://github.com/mfcastilho/decodificador-one-oracle-next-education" target="_blank">Repositório</a>
                                   <a href="https://mfcastilho.github.io/decodificador-one-oracle-next-education/" target="_blank">Deploy</a>
                              </div>
                         </div>
                         
                         <div className="image-box">
                              <img src="../../../public/projects-images/decodificador-one-oracle-next-education.svg" alt="" title="" />
                         </div>
                         
                         

                         
                    </motion.div>

               </div>
          </motion.div>
     );
}

export default MyProjects;