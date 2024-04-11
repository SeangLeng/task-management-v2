'use client';

import React from 'react'
import { TypeAnimation } from 'react-type-animation'

export default function TextAnimationComponent() {
  return (
    <TypeAnimation
      sequence={[
        'on TasksDot.', 2000,
        `to make easier.`, 2000,
      ]}
      wrapper="span"
      speed={20}
      style={{ display: 'inline-block' }}
      repeat={Infinity} />
  )
}
