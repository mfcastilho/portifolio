import "./topPart.css"

function TopPart(){

     return(
          <div className="top-part">
               <div className="left-part">
                    <h2>Olá, meu nome é Mario Frederico</h2>
                    <h6>Sou Desenvovledor Web</h6>
                    <ul>
                         <li><a href="">Github</a></li>
                         <li><a href="">Linkedin</a></li>
                         <li><a href="">Instagram</a></li>
                         <li><a href="">Currículo</a></li>
                    </ul>
               </div>
               <div className="right-part">
                    <img src="../../../public/mario-foto-linkedin.png" alt="" />
               </div>
          </div>
     );
}

export default TopPart;