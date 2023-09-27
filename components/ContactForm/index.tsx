'use client';
import styles from './styles.module.scss';
import { MdEmail } from 'react-icons/md';
import { useState } from 'react';
import { BiSolidPaperPlane } from 'react-icons/bi';

const ContactForm = () => {
  const [emailInfo, setEmailInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  })
  const [loading, setLoading] = useState(false);

  const handleChange = (value: string, element: string) => {
    setEmailInfo({...emailInfo, [element]: value});
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) {
      return;
    }
    setLoading(true);
    const body = JSON.stringify({
      "email": emailInfo.email,
      "name": emailInfo.firstName,
      "lastName": emailInfo.lastName,
      "message": emailInfo.message
    })
    try {
      const res = await fetch('/api/mailer', {
        method: "POST",
        body: body
      })
      const data = await res.json()
      setLoading(false);
    } catch (error) {
      console.log("oof");
      setLoading(false)
    }
  }

  return (
    <section className={styles.contactForm}>
      <form onSubmit={handleSubmit}>
        <h2><MdEmail /> Send an E-mail</h2>
        <p>Get in touch by sending an e-mail to felbenini@gmail.com!</p>
        <span>
          <input type="text" placeholder='First name*' onChange={(e) => handleChange(e.target.value, "firstName") } value={emailInfo.firstName} /> 
          <input type="text" placeholder='Last name*' onChange={(e) => handleChange(e.target.value, "lastName")} value={emailInfo.lastName}  />
        </span>
          <input type="email" placeholder='Your e-mail*' onChange={(e) => handleChange(e.target.value, "email")} value={emailInfo.email} />
          <textarea style={{width: "98%", height: '230px'}} onChange={(e) => handleChange(e.target.value, "message")} value={emailInfo.message} name="message" placeholder='Your message*' />
          <button type="submit">
            <BiSolidPaperPlane /> { !loading ? 'Send' : 'Sending...' }
          </button>
      </form>
    </section>
  )
}

export default ContactForm
