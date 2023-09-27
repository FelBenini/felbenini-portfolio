'use client';
import styles from './styles.module.scss';
import { MdEmail } from 'react-icons/md';
import { useState } from 'react';
import { BiSolidPaperPlane } from 'react-icons/bi';
import Image from 'next/image';
import { setServers } from 'dns';

const ContactForm = () => {
  const [emailInfo, setEmailInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  })
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (value: string, element: string) => {
    setEmailInfo({...emailInfo, [element]: value});
  }

  const handleSubmit = async (e: React.FormEvent) => {
    if (loading) {
      return;
    }
    setLoading(true);
    e.preventDefault();
    const body = JSON.stringify({
      "email": emailInfo.email,
      "name": emailInfo.firstName,
      "lastName": emailInfo.lastName,
      "message": emailInfo.message
    });
    try {
      await fetch('/api/mailer', {
        method: "POST",
        body: body
      });
      setSuccess(true);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  return (
    <section className={styles.contactForm}>
      <form onSubmit={handleSubmit}>
        <h2><MdEmail /> Send an E-mail</h2>
        <p>Get in touch by sending an e-mail to felbenini@gmail.com!</p>
        <span>
          <input type="text" placeholder='First name*' required onChange={(e) => handleChange(e.target.value, "firstName") } value={emailInfo.firstName} /> 
          <input type="text" placeholder='Last name*' required onChange={(e) => handleChange(e.target.value, "lastName")} value={emailInfo.lastName}  />
        </span>
          <input type="email" placeholder='Your e-mail*' required onChange={(e) => handleChange(e.target.value, "email")} value={emailInfo.email} />
          <textarea style={{width: "98%", height: '230px'}} required onChange={(e) => handleChange(e.target.value, "message")} value={emailInfo.message} name="message" placeholder='Your message*' />
          <button type="submit">
            <BiSolidPaperPlane /> { !loading ? success ? 'Sent!' : 'Send' : 'Sending...' }
          </button>
      </form>
      <div className={styles.illustration} >
        <Image src='/mail-box.svg' alt='Illustration of two persons sending an e-mail' fill />
      </div>
    </section>
  )
}

export default ContactForm
