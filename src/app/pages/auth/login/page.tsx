'use client';

import { SIGNUP } from '@/constrain/routes';
import { setUser } from '@/lib/features/userInfo/Userinfo';
import { useAxiosClient } from '@/services/Axios.service';
import { Button, Input } from '@nextui-org/react'
import { message } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { BsEyeFill } from 'react-icons/bs';
import { FaEyeSlash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import login from '~/assets/Work time-amico.png';

export default function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUserinfo] = useState<any>();
  const dispatch = useDispatch();
  const userInformation = useSelector((state: any) => state.userInfo)
  const router = useRouter();

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event?.target.value);
  }

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event?.target.value);
  }

  const handleLogin = async () => {
    setLoading(true);
    if (email && password) {
      try {
        const response = await useAxiosClient.post('/api/auth/login', { email, password });
        if (typeof window !== 'undefined') {
          localStorage.setItem('userInfo', response.data.user);
        }
        router.push('/');
      } catch (error: any) {
        message.error(error.message);
      }
    }
    setLoading(false);
  }

  const [showPassword, setShow] = useState<boolean>(false);
  const handleShowPassword = () => {
    setShow((e: boolean) => !e);
  }

  return (
    <section>
      <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 justify-center items-center gap-10'>
        <Image src={login} alt='login-image' />
        <div className='p-5'>
          <h1 className='text-center text-primary-color font-bold'>Login</h1>
          <p className='text-center mt-5'>Welcome back! Enter your credentials securely to access your account. Forgot your password? Use the Forgot Password link.</p>

          <div className='grid gap-4 mt-10'>
            <Input
              value={email}
              onChange={handleEmail}
              size='lg'
              placeholder='email' variant='flat'
              classNames={{
                input: 'p-5',
                inputWrapper: 'bg-white border-primary-color border-b border-b-3 rounded-full'
              }}
            />
            <Input
              value={password}
              onChange={handlePassword}
              size='lg'
              type={showPassword ? 'text' : 'password'}
              endContent={<button onClick={handleShowPassword} className='bg-transparent border-0 p-0 text-primary-color'>{showPassword ? <FaEyeSlash /> : <BsEyeFill />}</button>}
              placeholder='password' variant='flat'
              classNames={{
                input: 'p-5',
                inputWrapper: 'bg-white border-primary-color border-b border-b-3 rounded-full'
              }}
            />
            <Button isLoading={loading} onClick={handleLogin} className='rounded-full font-semibold' variant='solid' color='secondary'>Sign in</Button>
            <Link href={SIGNUP}>Already has an account yet? <span className='text-primary'>Create new account</span></Link>
          </div>
        </div>
      </div>
    </section>
  )
}
