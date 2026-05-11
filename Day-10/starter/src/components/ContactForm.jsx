import { useState } from 'react'

function ContactForm({ onAdd }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '' })
  const [errors, setErrors] = useState({})

  const validate = () => {
    const errs = {}
    if (!form.name || form.name.length < 2) errs.name = 'Name must be at least 2 characters'
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Valid email required'
    if (form.phone && !/^\d*$/.test(form.phone)) errs.phone = 'Phone must be numeric'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    onAdd(form)
    setForm({ name: '', email: '', phone: '' })
    setErrors({})
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input className={errors.name ? 'error' : ''} placeholder="Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
        {errors.name && <div className="error-msg">{errors.name}</div>}
      </div>
      <div className="form-group">
        <input className={errors.email ? 'error' : ''} placeholder="Email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
        {errors.email && <div className="error-msg">{errors.email}</div>}
      </div>
      <div className="form-group">
        <input className={errors.phone ? 'error' : ''} placeholder="Phone (optional)" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
        {errors.phone && <div className="error-msg">{errors.phone}</div>}
      </div>
      <button className="btn-submit" type="submit">Add Contact</button>
    </form>
  )
}

export default ContactForm
