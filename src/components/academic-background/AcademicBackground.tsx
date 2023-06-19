import "./academicBackground.css";


function AcademicBackground(){
     
     return(
          <div className="academic-background">
               <h2>Formação</h2>
               <div className="academic-background-container">
                    
                    <div className="academic-background-icons-box">
                         <img src="../../../public/icons/unicesumar-icon.svg" alt="" title="" />
                         <div className="academic-background-description">
                              <p>Análise e Desenvolvimento de Sistemas</p>
                              <p>Concluído - Novembro de 2022</p>
                         </div>
                    </div>
                    
                    <div className="academic-background-icons-box">
                         <img className="digital-house-icon" src="../../../public/icons/digital-house-icon2.svg" alt="" title="" />
                         <div className="academic-background-description">
                              <p>Desenvolvimento Web Fullsatck</p>
                              <p>Concluído - Abril de 2023</p>
                         </div>
                    </div>
                    <div className="academic-background-icons-box">
                         <img src="../../../public/icons/alura-icon.svg" alt="" title="" />
                         <div className="academic-background-description">
                              <p>Desenvolvimento Frontend</p>
                              <p>Em andamento - Outubro de 2023</p>
                         </div>
                    </div>
                    <div className="academic-background-icons-box">
                         <img src="../../../public/icons/cubos-academy-icon-.svg" alt="" title="" />
                         <div className="academic-background-description">
                              <p>Desenvolvimento Backend</p>
                              <p>Em andamento - Outubro de 2023</p>
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default AcademicBackground;