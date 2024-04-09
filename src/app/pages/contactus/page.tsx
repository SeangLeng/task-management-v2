'use client';

import { Button, Input, Textarea } from '@nextui-org/react';
import Image from 'next/image';
import React, { useRef, FormEvent } from 'react';
import contactus from '~/assets/Accept tasks-amico.png';
import emailjs from '@emailjs/browser';
import { message } from 'antd';

const ContactUs: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const validateForm = (event: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget);
    const username = formData.get('to_name');
    const email = formData.get('user_email');
    const messages = formData.get('message');

    if (!username || !email || !messages) {
      message.error("Please fill all the fields to contact to us");
      event.preventDefault();
    }
  };

  const handleSendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    validateForm(event);
    if (form.current) {
      emailjs
        .sendForm(`service_7swn1yg`, `template_19pzhim`, form.current, `j1bZiqy-_MCQbkVUl`)
        .then(
          () => {
            message.success("Your email has send to us successfully");
          },
          (error) => {
            message.success("Sorry something went wrong with your email");
          },
        );
    }
  };

  return (
    <section id='contact'>
      <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10'>
        <Image src={contactus} alt='contact-us' />
        <div className='text-text-color'>
          <h1 className='font-semibold'>Contact us</h1>
          <p className='mt-5'>You guys can contact by these information below.</p>
          <form ref={form} onSubmit={handleSendEmail} className='mt-10 grid gap-5'>
            <Input name='to_name' size='lg' placeholder='Username' type='text' variant='faded' color='secondary' classNames={{
              inputWrapper: 'rounded-xl shadow-md'
            }} />
            <Input name='user_email' size='lg' placeholder='Email' type='email' variant='faded' color='secondary' classNames={{
              inputWrapper: 'rounded-xl shadow-md'
            }} />
            <Textarea name='message' size='lg' placeholder='Message' type='text' variant='faded' color='secondary' />
            <Button value='Send' type='submit' variant='solid' className='rounded-full hover:shadow-lg' color='secondary' size='lg'>Send message</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
