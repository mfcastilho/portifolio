import "./contact.css";


function Contact(){
     return(
          <div className="contact" id="contact">
               <h2>Contato</h2>
               <div className="contact-elements-box">
                    <p>Quer entrar em contato comigo?</p>
                    <p className="paragraph2">Preencha o formulário entrarei em contato o mais rápido possível.</p>
                    <form action="https://hotmail.us8.list-manage.com/subscribe/post?u=2ce863bd9b2eb5d7ac800d486&amp;id=ddfa824621&amp;f_id=006876e0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
                         <input type="text" name="NAME" placeholder="Nome:" required/>
                         <input type="email" name="EMAIL" placeholder="Email:" required/>
                         <input type="text" name="SUBJECT" placeholder="Assunto:" required/>
                         <textarea name="MESSAGE" id="" placeholder="Sua mensagem:" required></textarea>
                         <button type="submit">Enviar</button>
                    </form>
                    
               </div>
          </div>
     );
}

export default Contact;