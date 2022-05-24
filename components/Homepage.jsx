import React, { useEffect, useState } from 'react'
import Image from 'next/image'


function Homepage() {
    const [image,setImage] = useState("https://apod.nasa.gov/apod/image/1505/M51-with-12hours_AOXLumPugh.jpg")
    const [imageTit,setImageTit] = useState("")
    const [imageExpl,setImageExpl] = useState("")
    async function fetchImage(){
        fetch('https://api.nasa.gov/planetary/apod?api_key=eIfrPRv0IskcVMySQp1zGRg2zgtN56Kie31aoolS')
      .then(response => response.json())
      .then(data =>{
        setImage(data.url)
        setImageTit(data.title)
        setImageExpl(data.explanation)
      })
    }
    useEffect(() => {
      fetchImage()
    }, []);

  return (
    <div className='mt-14 ml-14'>
      <div className='flex'>
        <div>
          <p className='text-gray-300'>Image of the day</p>
          <Image src={image} height={500} width={500}/>
          <p className='text-white font-bold text-xl'>{imageTit}</p>
          <p className='text-gray-300 inline-block max-w-2xl'>{imageExpl}</p>
        </div>
        <div className='w-full text-center'>
          <h1 className='text-white text-5xl'>Welcome to <span className='font-bold'>Spejs</span></h1>
        </div>
      </div>


    </div>
  )
}

export default Homepage
//https://api.nasa.gov/planetary/apod?api_key=eIfrPRv0IskcVMySQp1zGRg2zgtN56Kie31aoolS