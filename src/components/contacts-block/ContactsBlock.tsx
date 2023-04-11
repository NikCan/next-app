import Link from "next/link";

const get = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

const ContactsBlock = async () => {
  const contacts: { id: number, name: string, email: string }[] = await getData()
  const contactList = contacts
    .map(({id, name, email}) => (
      <li key={id}>
        <Link href={`contacts/${id}`}><strong>{name}</strong> ({email})</Link>
      </li>
    ))

  return (
    <div>
      <h1>Contact list:</h1>
      <ul>
        {contactList}
      </ul>
    </div>

  )
}

export default ContactsBlock