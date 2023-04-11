import {FC} from "react"

export const metadata = {
  title: {},
  description: 'travel-agency',
}

type Props = {
  contact: {
    name: string
    email: string
    address: {
      street: string
      suite: string
      city: string
      zipcode: number
    }
  }
}

const ContactInfo: FC<Props> = ({contact}) => {
  const {name, address, email} = contact || {}
  const {street, city, suite, zipcode} = address || {}
  metadata.title = contact.name || 'Empty contact'

  return (
    <>
      <div>
        <strong>Email: </strong>
        {email}
      </div>
      <div>
        <strong>Address: </strong>
        {`${street}, ${suite}, ${city}, ${zipcode}`}
      </div>

    </>
  )
}

export default ContactInfo

