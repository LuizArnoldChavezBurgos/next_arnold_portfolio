import React from 'react'
import ContactForm from '@/components/Form/ContactForm'
import Image from 'next/image'
import Star from "@/assets/icons/star.png"

type Props = {}

const Contact = (props: Props) => {
  return (
    <div className='h-screen pt-14 bg-white-150'>
      
      <div className='container sm:px-6 mx-auto'>
        {/* Title */}
        <div className='flex w-full flex-col gap-4 items-center justify-center'>
          <Image src={Star} alt='orange_star' className='h-12 w-12' />
          <h1 className=''>Contact</h1>
        </div>
        <p className='mx-auto w-full max-w-[32rem] text-center my-8'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in ipsum
          nulla. Vivamus risus eros, accumsan at sem et, egestas iaculis metus.
          Suspendisse vitae nibh laoreet, condimentum metus eget, faucibus.
        </p>
        
        {/* Form */}
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact