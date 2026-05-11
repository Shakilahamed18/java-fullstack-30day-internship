import { useState } from 'react'
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'

function App() {
  const [contacts, setContacts] = useState([])
  const [search, setSearch] = useState('')

  const addContact = (contact) => setContacts(prev => [...prev, { ...contact, id: Date.now() }])
  const deleteContact = (id) => setContacts(prev => prev.filter(c => c.id !== id))

  const filtered = contacts.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.email.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="app">
      <h1>Contact Manager</h1>
      <ContactForm onAdd={addContact} />
      <input className="search" placeholder="Search contacts..." value={search} onChange={e => setSearch(e.target.value)} />
      <ContactList contacts={filtered} onDelete={deleteContact} />
    </div>
  )
}

export default App
