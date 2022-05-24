import Head from 'next/head'
import Image from 'next/image'
import Navbar from "../components/Navbar"
import Homepage from "../components/Homepage"

export default function Home() {
  return (
    <div className='h-[1500px]'>
      <Head>
        <title>Spejs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href={`${process.env.NEXT_PUBLIC_FAVICON}/favicon.ico`} />
      </Head>

      <Navbar/>
      <Homepage/>
    </div>
  )
}
