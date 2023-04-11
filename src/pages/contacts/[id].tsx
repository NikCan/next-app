'use client'

import ContactInfo from "@/components/contact-info/ContactInfo";
import {useRouter} from "next/router";

export const metadata = {
  title: 'Contact',
  description: 'travel-agency',
}

const Contact = async () => {
  const router = useRouter()
  const id = router.query
  console.log(id)
  const getData = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }

  const contact = await getData()
  return (
    <>
      <ContactInfo contact={contact}/>
    </>
  )
}

export default Contact

