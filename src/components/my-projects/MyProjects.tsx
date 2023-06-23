import "./myProjects.css";
import { motion } from "framer-motion";


function MyProjects(){

     

     return(
          <div className="my-projects" id="my-projects">
               <h2>Meus projetos</h2>
               <div className="my-projects-container">
                    
                    
                    <div className="my-projects-icons-box">
                         
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
                         </div>

                         
                    </div>

                     
                    <div className="my-projects-icons-box">
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
                         </div>
                         
                         <div className="image-box">
                              <img src="../../../public/projects-images/findmovie-image.svg" alt="" title="" />
                         </div>
                         
                        

                         
                    </div>

                    <div className="my-projects-icons-box">
                         
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
                         </div>

                        
                    </div>

                    <div className="my-projects-icons-box">
                         <div className="my-projects-description left-description">
                              <h3>Decodificador de Textos</h3>
                              <p>Aplicação Frontend que criptografa e descriptografa textos.</p>
                              <div className="used-project-tech">
                                   <p>Javascript</p> *
                                   <p>HTML</p> *
                                   <p>CSS</p> *
                              </div>
                         </div>
                         
                         <div className="image-box">
                              <img src="../../../public/projects-images/decodificador-one-oracle-next-education.svg" alt="" title="" />
                         </div>
                         
                         

                         
                    </div>

               </div>
          </div>
     );
}

export default MyProjects;