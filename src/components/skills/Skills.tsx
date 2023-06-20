import "./skills.css";

function Skills(){
     return(
          <div className="skills" id="skills">
               
               
                    <h2>Skills</h2>
                    <div className="skills-description">
                         <div className="skills-icons-box">
                              <img src="../../../public/icons/typescript_original_logo_icon_146317.svg" alt="typescript icon" title="typescript" />
                         </div>
                         <div className="skills-icons-box">
                              <img src="../../../public/icons/javascript_original_logo_icon_146455.svg" alt="javascript icon" title="javascript" />
                         </div>
                         <div className="skills-icons-box background-icon">
                              <img className="redimention-icon" src="../../../public/icons/file_type_reactjs_icon_130205.svg" alt="reactjs icon" title="reactjs" />
                         </div>
                         <div className="skills-icons-box background-icon">
                              <img src="../../../public/icons/nodejs_plain_logo_icon_146409.svg" alt="nodejs icon" title="nodejs" />
                         </div>
                         
                         <div className="skills-icons-box background-icon">
                              <img className="redimention-icon" src="../../../public/icons/express-js-icon.svg" alt="expressjs icon" title="expressjs" />
                         </div>
                         <div className="skills-icons-box background-icon">
                              <img className="redimention-icon" src="../../../public/icons/sequelizejs_logo_icon_170747.svg" alt="sequelizejs icon" title="sequelizejs" />
                         </div>
                         <div className="skills-icons-box background-icon mysql-icon">
                              <img className="mysql-icon-image" src="../../../public/icons/mysql-seeklogo.com.svg" alt="mysql icon" title="mysql" />
                         </div>
                         <div className="skills-icons-box background-icon">
                              <img className="postgres-icon" src="../../../public/icons/postgresql-icon.svg" alt="postgres icon" title="postgres" />
                         </div>
                         
    
                    </div>
               
          </div>
     );
}

export default Skills;