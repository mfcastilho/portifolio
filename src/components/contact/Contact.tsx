import "./contact.css";


function Contact(){
     return(
          <div className="contact" id="contact">
               <h2>Contato</h2>
               <div className="contact-elements-box">
                    <p>Quer entrar em contato comigo?</p>
                    <p className="paragraph2">Preencha o formulário entrarei em contato o mais rápido possível.</p>
                    <form action="">
                         <input type="text" name="name" placeholder="Nome:"/>
                         <input type="email" name="email" placeholder="Email:"/>
                         <input type="text" name="subject" placeholder="Assunto:"/>
                         <textarea name="message" id="" placeholder="Sua mensagem:"></textarea>
                    </form>
               </div>
          </div>
     );
}

export default Contact;