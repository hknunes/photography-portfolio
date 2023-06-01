import Image from 'next/image'
import { Tab } from '@headlessui/react'
import Head from 'next/head'
import Link from 'next/link'
import Masonry from 'react-masonry-css'
import classNames from 'classnames'

import ocean1 from "../public/ocean-1.jpeg";
import ocean2 from "../public/ocean-2.jpeg";
import ocean3 from "../public/ocean-3.jpeg";
import ocean4 from "../public/ocean-4.jpeg";
import ocean5 from "../public/ocean-5.jpeg";

const tabs = [
  {
    key: 'all',
    display: 'All'
  },
  {
    key: 'digital',
    display: 'Digital'
  },
  {
    key: 'Analogic',
    display: 'Analogic'
  }
];

const images = [ocean1,ocean2,ocean3,ocean4,ocean5];

export default function Home() {
  return (
    <div className="h-full bg-[url('/photography-bg.jpg')] bg-top bg-cover overflow-auto">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className='fixed top-0 w-full z-10 flex justify-between items-center h-[90px] px-6'>
        <div>Photography Portfolio</div>
        <Link href="#" className='hidden rounded-3xl bg-slate-200 text-stone-600 px-3 py-2 hover:bg-opacity-90'>
          Get in touch
        </Link>
      </header>

      <main className='pt-[110px]'>
        <div className='flex flex-col items-center h-full'>
          <Tab.Group>
            <Tab.List className='flex items-center gap-12'>

              {tabs.map(tab => (
                <Tab key={tab.key} className='p-2'>
                  {({selected}) => (
                    <span className={classNames('uppercase', selected ? 'text-white':'text-stone-600')}>
                      {tab.display}
                    </span>
                  )}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className='h-full max-w-[900px] w-full p-2 sm:p-4 my-6'>
              <Tab.Panel>
                <Masonry  
                  breakpointCols={2} 
                  className="flex gap-4" 
                  columnClassName=""
                >

                  <Image src={ocean1} alt="placeholder" className='my-4'/>
                  <Image src={ocean2} alt="placeholder" className='my-4'/>
                  <Image src={ocean3} alt="placeholder" className='my-4'/>
                  <Image src={ocean4} alt="placeholder" className='my-4'/>
                  <Image src={ocean5} alt="placeholder" className='my-4'/>

                  {/* <img src='/ocean-1.jpeg' alt='ocean-1' className='my-4'/>
                  <img src='/ocean-2.jpeg' alt='ocean-2' className='my-4'/>
                  <img src='/ocean-3.jpeg' alt='ocean-3' className='my-4'/>
                  <img src='/ocean-4.jpeg' alt='ocean-4' className='my-4'/>
                  <img src='/ocean-5.jpeg' alt='ocean-5' className='my-4'/> */}
                </Masonry>
              </Tab.Panel>
              <Tab.Panel>Digital Content</Tab.Panel>
              <Tab.Panel>Analogic Content</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </main>

      <footer className='h-[90px] flex justify-center items-center uppercase text-lg font-medium'>
        <p>Photography Portfolio</p>
      </footer>
    </div>
  )
}
