import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
        <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=''>
        <p>Placholder for main</p>
      </main>

      <footer>
        <p>Placholder for footer</p>
      </footer>
    </div>
  )
}
