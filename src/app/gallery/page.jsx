import Image from 'next/image';
import React from 'react'

const GalleryPage = () => {
  return (
    <div>
      <h1 className='text-center'>Regular Img tag</h1>
      <img src="https://miro.medium.com/v2/resize:fit:1000/1*v3XndYeIsBtk4CkpMf7vmA.jpeg" className="mx-auto" height={500} width={500}alt="" />
      <h1 className='text-center'>next Image Optimization</h1>
      <Image src="https://miro.medium.com/v2/resize:fit:1000/1*v3XndYeIsBtk4CkpMf7vmA.jpeg" className="mx-auto" height={500} width={500} alt="" />
    </div>
  )
}

export default GalleryPage;