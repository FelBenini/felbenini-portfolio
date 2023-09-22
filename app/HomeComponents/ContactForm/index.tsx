'use client'
import { useState } from 'react';
import styles from './styles.module.scss';

const ContactForm = () => {
  const [formValue, setFormValue ] = useState({
    firstName: "",
    lastName: "",
    cellphone: "",
    message: "",
    email: ""
  })
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  }
  return (
    <section className={styles.contactSection}>
      <form onSubmit={handleSubmit}>
        <input type='text' value={formValue.firstName} onChange={e => setFormValue({...formValue, firstName: e.target.value})} />
        <input type='text' value={formValue.lastName} onChange={e => setFormValue({...formValue, lastName: e.target.value})} />
        <input type='email' value={formValue.email} onChange={e => setFormValue({...formValue, email: e.target.value })} />
      </form>
    </section>
  )
}

export default ContactForm
