import React, { useState } from 'react'
import '../css/contact.css'
import { contactService } from '../services/ContactService';
import CustomAlert from '../components/CustomAlert';
import CustomAlertNav from '../components/CustomAlertNav';

export default function Contact() {
  const [formData,setFormData] = useState({
    email:'',
    message:''
  });

  const [isMesageSent,setIsMessageSent]=useState(false);
  const [customMessage,setCustomMessage]=useState('');



  function handleDataChange(e:any): void {
    e.preventDefault();
    setFormData((prevState=>{
      return {
        ...prevState,
        [e.target.id]:e.target.value
      }
    }))

  }

  function handleSubmit(e:any): void {
    e.preventDefault();

    
    contactService.submitContactMessage(formData).then((x)=>{
      setIsMessageSent(true);
    setCustomMessage('Message sent successfully')
    setTimeout(()=>{
      setIsMessageSent(false);
    },3000)
    }).catch((err)=>{
      setIsMessageSent(true);
      setCustomMessage('Failed to send a message, please try again later')
      setTimeout(()=>{
        setIsMessageSent(false);
      },3000)
    })
  
   
  }

  return (
   <>
   {isMesageSent && <CustomAlertNav message={customMessage} isTrue={true}/>}
    <div className="contact-page">
        <div className="form-header">
        <h1>GET IN TOUCH</h1>
        </div>

        <div className="contact-form">
            
            <form>
             <input type="text" placeholder='Email' id='email' onChange={handleDataChange}  />
             <textarea placeholder='Message' id='message' onChange={handleDataChange} ></textarea>
              <button className='submit-form-btn' onClick={handleSubmit}>Submit</button>
            </form>

        </div>
        
    </div>
    
   </>
  )
}
