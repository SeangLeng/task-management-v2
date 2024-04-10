'use client';

import { Button, Input, Textarea } from '@nextui-org/react';
import Image from 'next/image';
import React, { useRef, FormEvent, useState } from 'react';
import contactus from '~/assets/Accept tasks-amico.png';
import emailjs from '@emailjs/browser';
import { message } from 'antd';
import { MdSend } from 'react-icons/md';
import { emailjsProps } from '@/app/service/EmailJs';

const ContactUs: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [check, setCheck] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const validateForm = (event: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget);
    const username = formData.get('to_name');
    const email = formData.get('user_email');
    const messages = formData.get('message');

    if (!username || !email || !messages) {
      message.error("Please fill all the fields to contact to us");
      event.preventDefault();
      setCheck(false);
    } else {
      setCheck(true);
    }
  };

  const handleSendEmail = (event: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();
    validateForm(event);
    if (form.current && check) {
      emailjs
        .sendForm(emailjsProps.serviceid, emailjsProps.templateId, form.current, emailjsProps.publickey)
        .then(
          () => {
            message.success("Your email has send to us successfully");
          },
          (error) => {
            message.success("Sorry something went wrong with your email");
          },
        );
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <section id='contact'>
      <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10'>
        <Image src={contactus} alt='contact-us' />
        <div className='text-text-color'>
          <h1 className='font-semibold'>Contact us</h1>
          <p className='mt-5'>You guys can contact by these information below.</p>
          <form ref={form} onSubmit={handleSendEmail} className='mt-10 grid gap-4'>
            <Input name='to_name' size='lg' placeholder='Username' type='text' variant='faded' color='secondary' classNames={{
              inputWrapper: 'rounded-xl shadow-md bg-white'
            }} />
            <Input name='user_email' size='lg' placeholder='Email' type='email' variant='faded' color='secondary' classNames={{
              inputWrapper: 'rounded-xl shadow-md bg-white'
            }} />
            <Textarea
              classNames={{
                inputWrapper: 'rounded-xl shadow-md bg-white'
              }}
              name='message' size='lg' placeholder='Message' type='text' variant='faded' color='secondary' />
            <Button
              spinner={
                <svg
                  className="animate-spin h-5 w-5 text-current"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    fill="currentColor"
                  />
                </svg>
              }
              isLoading={loading} value='Send' type='submit' variant='solid' className='rounded-full hover:shadow-lg' color='secondary' size='lg'>Send message <MdSend /> </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
