import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaGithub } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className='lg:p-10 md:p-5 p-3 z-40 bg-gradient-to-t from-purple-200 to-transparent'>
      <h2 className='font-semibold text-text-color'>TaskDot.</h2>
      <div className='font-semibold text-lg mt-5 text-text-color flex justify-start items-center gap-5'>
        <Link href={'#'}>Features</Link>
        <Link href={'#'}>Contact</Link>
        <Link href={'#'}>Q/A</Link>
      </div>
      <div className='mt-10'>
        <h4 className='font-medium'>
          Stay in touch with
        </h4>
        <div className='flex gap-3 text-primary-color mt-5 hover:text-purple-500'>
          <Link href={'#'}><FaGithub size={30} /></Link>
          <Link href={'#'}><FaFacebook size={30} /></Link>
        </div>
      </div>
    </footer>
  )
}
