import Image from 'next/image'
import React from 'react'

type buttonProps = {
    type: 'submit' | 'button',
    title: string,
    icon?: string,
    variant?: string
}

const Button = ( { type, title, icon, variant }:buttonProps ) => {
  return (
    <button className={`flex justify-center gap-3 border rounded-md ${variant}`}>
        { icon && <Image src={icon} alt='icon' height={24} width={24}/>}
        <label className='whitespace-nowrap'>{title}</label>
    </button>
  )
}

export default Button