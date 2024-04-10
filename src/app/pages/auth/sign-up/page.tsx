'use client';

import { LOGIN } from '@/constrain/routes';
import { useAxiosClient } from '@/services/Axios.service';
import { Button, Input } from '@nextui-org/react'
import { message } from 'antd';
import Image from 'next/image'
import Link from 'next/link'
import React, { ChangeEvent, useState } from 'react'
import { BsEyeFill } from 'react-icons/bs';
import { FaEyeSlash } from 'react-icons/fa';

import login from '~/assets/Work time-amico.png';
import svg from '~/assets/svg/Ellipse 107.svg';

export default function SignUp() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [con_password, setConPassword] = useState<string>('');
  const [showPassword, setShow] = useState<boolean>(false);
  const handleShowPassword = () => {
    setShow((e: boolean) => !e);
  }
  const handleSetEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }
  const handleSetPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }
  const handleSetConPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConPassword(event.target.value);
  }
  const handleSignup = async () => {
    if (email && password && con_password && password === con_password) {
      try {
        const signupClient = await useAxiosClient.post('/api/auth/signup', {
          email, password
        }).then((response) => {
          message.success(response.data.message);
        }).catch((error) => { message.error(error.message) });
      } catch (error: any) { message.error(error.message) };
    } else {
      message.error('sorry something when wrong!');
    }
  }
  return (
    <section className='relative'>
      <Image src={svg} alt='svg' className='absolute z-0 w-1/3 -bottom-10 lg:-right-20 md:-right-10 right-0' />
      <Image src={svg} alt='svg' className='absolute z-0 w-1/3 -top-10 lg:-left-20 md:-left-10 left-0' />

      <div className='grid lg:grid-cols-2 md:grid-cols-2 z-10 grid-cols-1 justify-center items-center gap-10 border rounded-2xl backdrop-blur-lg bg-white/25 shadow-sm'>
        <Image src={login} alt='login-image' />
        <div className='p-5'>
          <h1 className='text-center text-primary-color font-bold'>Sign up</h1>
          <p className='text-center mt-5'>Start by visiting the website is homepage or specific sign-up page. Look for a Sign Up or Create Account button/link prominently displayed.</p>

          <div className='grid gap-4 mt-10'>
            <Input
              value={email}
              onChange={handleSetEmail}
              size='lg'
              placeholder='email or username' variant='flat'
              classNames={{
                input: 'p-5',
                inputWrapper: 'bg-white border-primary-color border-b border-b-3 rounded-full'
              }}
            />
            <Input
              value={password}
              onChange={handleSetPassword}
              size='lg'
              type={showPassword ? 'text' : 'password'}
              endContent={<button onClick={handleShowPassword} className='bg-transparent border-0 p-0 text-primary-color'>{showPassword ? <FaEyeSlash /> : <BsEyeFill />}</button>}
              placeholder='password' variant='flat'
              classNames={{
                input: 'p-5',
                inputWrapper: 'bg-white border-primary-color border-b border-b-3 rounded-full'
              }}
            />
            <Input
              value={con_password}
              onChange={handleSetConPassword}
              size='lg'
              type={showPassword ? 'text' : 'password'}
              endContent={<button onClick={handleShowPassword} className='bg-transparent border-0 p-0 text-primary-color'>{showPassword ? <FaEyeSlash /> : <BsEyeFill />}</button>}
              placeholder='confirm-password' variant='flat'
              classNames={{
                input: 'p-5',
                inputWrapper: 'bg-white border-primary-color border-b border-b-3 rounded-full'
              }}
            />
            <Button onClick={handleSignup} className='rounded-full font-semibold' variant='solid' color='secondary'>Sign in</Button>
            <Link href={LOGIN}>Already has an account? <span className='text-primary'>Login</span></Link>
          </div>
        </div>
      </div>
    </section>
  )
};