import React,{useState} from "react";
import "./contact.css";
import { motion } from "framer-motion";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Contact(){

     const [name, setName] = useState("" )
     const [email, setEmail] = useState("");
     const [subject, setSubject] = useState("");
     const [message, setMessage] = useState("");

     function handleSubmit(event: React.FormEvent<HTMLFormElement>){
          event.preventDefault();
          const data = {
               name,
               email,
               subject,
               message
          }
          try {
               const resp = axios.post("https://formspree.io/f/xqkvzkdw", data);

               toast.success("Mensagem enviada com sucesso!");
               console.log(resp);
               setTimeout(()=>{
                    setName("");
                    setEmail("");
                    setSubject("");
                    setMessage("");
               },6000)
               
          } catch (error) {
               console.log(error);
               toast.error("Erro ao enviar a mensagem.");
          }
     }


     return(
          <motion.div className="contact" id="contact"
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.5 }}
               transition={{ delay: 0.2, duration: 1.5 }}
               variants={{
                    hidden: { opacity: 0, y: 2 },
                    visible: { opacity: 1, y: 0 },
               }}
          >
               <ToastContainer />
               <h2>Contato</h2>
               <div className="contact-elements-box">
                    <p>Quer entrar em contato comigo?</p>
                    <p className="paragraph2">Preencha o formulário entrarei em contato o mais rápido possível.</p>
                    <form onSubmit={handleSubmit} action="https://hotmail.us8.list-manage.com/subscribe/post?u=2ce863bd9b2eb5d7ac800d486&amp;id=ddfa824621&amp;f_id=006876e0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
                         <input value={name} onChange={(e)=> setName(e.target.value)} type="text" name="NAME" placeholder="Nome:" required/>
                         <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" name="EMAIL" placeholder="Email:"  required/>
                         <input value={subject} onChange={(e)=> setSubject(e.target.value)} type="text" name="SUBJECT" placeholder="Assunto:" required/>
                         <textarea value={message} onChange={(e)=> setMessage(e.target.value)} name="MESSAGE" id="" placeholder="Mensagem:" required></textarea>
                         <button type="submit">Enviar</button>
                    </form>
                    
               </div>
               <div className="footer">
                    <h6>&copy;Copyright 2023 - Desenvolvido por Mario Frederico de Castilho</h6>
               </div>
          </motion.div>
     );
}

export default Contact;