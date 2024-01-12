import {
  faGithub,
  faLinkedin,
  faXTwitter
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'
import { Container } from './Container'

const contacts = [
  {
    href: 'https://www.linkedin.com/in/carloslsilva/',
    label: 'LinkedIn',
    icon: faLinkedin
  },
  {
    href: 'https://github.com/carloslsilva/',
    label: 'GitHub',
    icon: faGithub
  },
  {
    href: 'https://twitter.com/carloslsilva',
    label: 'Twitter',
    icon: faXTwitter
  }
]

export const Footer: FC = () => (
  <Container
    className='flex flex-col items-center justify-center gap-8 py-16 sm:flex-row sm:items-center sm:justify-between'
    variant='long'
    as='footer'
  >
    <span className='flex items-center justify-center gap-4'>
      <span className='flex items-center justify-center gap-2'>
        {contacts.map(contact => (
          <a
            className='duration-300 ease-out hover:-translate-y-1 hover:text-amber-500 active:animate-ping'
            key={contact.label}
            href={contact.href}
            rel='noreferrer'
            target='_blank'
          >
            <FontAwesomeIcon icon={contact.icon} />
          </a>
        ))}
      </span>
      <a
        className='hover:text-amber-500'
        href='https://www.carloslsilva.com/'
        rel='noreferrer'
        target='_blank'
      >
        @carloslsilva
      </a>
    </span>
    <a
      className='duration-300 ease-out hover:text-amber-500 active:animate-ping'
      href='https://rickandmortyapi.com/'
      rel='noreferrer'
      target='_blank'
    >
      Powered by Rick and Morty API
    </a>
  </Container>
)
