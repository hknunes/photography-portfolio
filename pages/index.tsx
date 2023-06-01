import Image from 'next/image'
import { Tab } from '@headlessui/react'
import Head from 'next/head'
import Link from 'next/link'

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
]

export default function Home() {
  return (
    <div className="flex flex-col h-full bg-[url('/photography-bg.jpg')] bg-top bg-cover">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className='flex justify-between items-center h-[90px] px-6'>
        <div>Photography Portfolio</div>
        <Link href="#" className='rounded-3xl bg-slate-200 text-stone-600 px-3 py-2 hover:bg-opacity-90'>
          {/* <button className='rounded-3xl bg-slate-200 text-stone-600 px-3 py-2 hover:bg-opacity-90'> */}
            Get in touch
          {/* </button> */}
        </Link>
      </header>

      <main className='grow'>
        <div className='flex flex-col items-center h-full'>
          <Tab.Group>
            <Tab.List className='flex items-center gap-12 '>

              {tabs.map(tab => (
                <Tab key={tab.key} className='p-2'>
                  {({selected}) => (
                    <span className={selected ? 'text-white':'text-stone-600'}>
                      {tab.display}
                    </span>
                  )}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className='h-full bg-stone-900 bg-opacity-80 max-w-[900px] w-full p-2 sm:p-4 my-6'>
              <Tab.Panel className=''>All Content</Tab.Panel>
              <Tab.Panel>Digital Content</Tab.Panel>
              <Tab.Panel>Analogic Content</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </main>

      <footer className='h-[60px] flex justify-center items-center'>
        <p>Photography Portfolio</p>
      </footer>
    </div>
  )
}
