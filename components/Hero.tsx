import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <section className='w-full nav-height relative bg-dark-green-mesh-gradient '>
        <div className=' flex h-5/6 justify-center items-center gap-12 px-14 flex-col sm:px-24'>
            <h1 className='text-3xl text-center lg:text-5xl'>Explore the possibilities of <br />lending with ForestPay</h1>
            <div className='w-full flex justify-center gap-6 items-center'>
                <Button 
                    type='submit'
                    title='Play Store'
                    icon='/android.svg'
                    variant='btn_green'
                />

                <Button 
                    type='submit'
                    title='App Store'
                    icon='/apple.svg'
                    variant='btn_dark_green_outline'
                />
            </div>
        </div>
    </section>
  )
}

export default Hero