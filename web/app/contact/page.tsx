import { Metadata } from 'next'

import Contact from './components/contact'

export const metadata: Metadata = {
  title: 'Contato - Pandemica'
}

export default function ContactPage() {
  return <Contact />
}