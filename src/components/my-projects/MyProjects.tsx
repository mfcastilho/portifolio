import "./myProjects.css";


function MyProjects(){
     return(
          <div className="my-projects" id="my-projects">
               <h2>Meus projetos</h2>
               <div className="my-projects-container">
                    
                    <a href="https://flamengo-api.cyclic.app/v1/api-docs/" className="my-projects-icons-box" target="_blank">
                         
                         <img src="../../../public/projects-images/flamengo-crf-icon.png" alt="" title="" />
                         <div className="my-projects-description">
                              <h3>API do Flamengo</h3>
                              <p>API  que disponibiliza dados históricos sobre o Clube de Regatas do Flamengo.</p>
                         </div>

                         <div className="used-project-tech">
                              <p>JavaScript</p> *
                              <p>NodeJs</p> *
                              <p>ExpressJs</p> *
                              <p>SequelizeJs</p> *
                              <p>Postgres</p> 
                         </div>
                    </a>

                     
                    <a href="https://finding-movies.netlify.app/" className="my-projects-icons-box" target="_blank">
                         
                         <img src="../../../public/projects-images/findmovie-image.png" alt="" title="" />
                         <div className="my-projects-description">
                              <h3>Find Movies</h3>
                              <p>Aplicação Frontend que busca informações de filmes  de forma dinâmica. </p>
                         </div>

                         <div className="used-project-tech">
                              <p>TypeScript</p> *
                              <p>ReactJs</p> *
                              <p>Hooks</p> *
                              <p>React Router Dom</p> *
                              <p>Axios</p> 
                         </div>
                    </a>

                    <a href="https://findyourcountryinfos.netlify.app/" className="my-projects-icons-box" target="_blank">
                         
                         <img src="../../../public/projects-images/restCountryApi.png" alt="" title="" />
                         <div className="my-projects-description">
                              <h3>Rest Country API</h3>
                              <p>Aplicação Frontend que busca informações de filmes  de forma dinâmica. </p>
                         </div>

                         <div className="used-project-tech">
                              <p>JavaScript</p> *
                              <p>ReactJs</p> *
                              <p>Context API</p> *
                              <p>React Router Dom</p> *
                              <p>Axios</p> 
                         </div>
                    </a>

                    <a href="https://mfcastilho.github.io/decodificador-one-oracle-next-education/" className="my-projects-icons-box" target="_blank">
                         
                         <img src="../../../public/projects-images/decodificador-one-oracle-next-education.png" alt="" title="" />
                         <div className="my-projects-description">
                              <h3>Decodificador de Textos</h3>
                              <p>Aplicação Frontend que criptografa e descriptografa textos.</p>
                         </div>

                         <div className="used-project-tech">
                              <p>Javascript</p> *
                              <p>HTML</p> *
                              <p>CSS</p> *
                         </div>
                    </a>

               </div>
          </div>
     );
}

export default MyProjects;