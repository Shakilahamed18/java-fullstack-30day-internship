function ContactList({ contacts, onDelete }) {
  if (contacts.length === 0) return <p className="empty">No contacts yet. Add one above!</p>

  return (
    <ul className="contact-list">
      {contacts.map(contact => (
        <li key={contact.id} className="contact-item">
          <div>
            <strong>{contact.name}</strong> — {contact.email}
            {contact.phone && <span> | {contact.phone}</span>}
          </div>
          <button className="btn-delete" onClick={() => onDelete(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}

export default ContactList
