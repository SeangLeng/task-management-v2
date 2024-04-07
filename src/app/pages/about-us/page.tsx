'use client';
import Lottie from 'lottie-react'
import React from 'react'

import AboutUsAccordin from '@/components/about-us/AboutUsAccordin';
import animationData from '~/assets/lotties/meeting.json';

export default function AboutUs() {
  return (
    <section id='about-us'>
      <section className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-16 justify-center items-center'>
        <Lottie
          loop={true}
          animationData={animationData}
          autoplay={true}
          height={400}
          width={400}
        />
        <div className='grid gap-5'>
          <h1 className='font-semibold text-primary-color'>About Us</h1>
          <p className='text-text-color'>
            We are dedicated to developing a robust task management system designed to empower users in creating, updating, and efficiently managing their tasks. Our application is equipped with features to seamlessly organize tasks, set priorities, and monitor progress. Think of it as more than just a to-do list; it is a comprehensive tool for optimizing task management. Join us on this journey to streamline your workflow and enhance productivity.
          </p>
        </div>
      </section>
      <section className='lg:p-10 md:p-5 p-0 mt-10'>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-10 rounded-xl text-white bg-gradient-to-br from-purple-500 to-purple-400 p-5'>
          <div>
            <h3 className='text-center font-semibold mb-5'>Vision</h3>
            <p>At the heart of our endeavor is the vision to revolutionize task management, fostering a world where individuals effortlessly navigate their responsibilities, unlocking their full potential for productivity and personal growth.</p>
          </div>
          <div>
            <h3 className='text-center font-semibold mb-5'>Mission</h3>
            <p>Our mission is to provide a cutting-edge task management system that transcends traditional to-do lists. We are committed to empowering users by offering a platform that not only streamlines task organization but also enhances the overall efficiency of their workflows. Through innovation and user-centric design, we aim to redefine how individuals approach and conquer their daily tasks, making productivity an intuitive and rewarding experience. Join us as we embark on this mission to transform the way you manage your tasks and elevate your productivity to new heights.</p>
          </div>
        </div>
      </section>
      <section className='lg:p-10 md:p-5 p-0 mt-10'>
        <h3 className='text-center text-secondary-color font-semibold'>FAQs</h3>
        <AboutUsAccordin />
      </section>
    </section>
  )
}
