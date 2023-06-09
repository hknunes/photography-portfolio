import Image from 'next/image';
import { Tab } from '@headlessui/react';
import Head from 'next/head';
import Link from 'next/link';
import Masonry from 'react-masonry-css';
import classNames from 'classnames';

import type { LightGallery } from 'lightgallery/lightgallery';
import LightGalleryComponent from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import bgImage from '../public/photography-bg.jpg';

import ocean1 from '../public/ocean-1.jpeg';
import ocean2 from '../public/ocean-2.jpeg';
import ocean3 from '../public/ocean-3.jpeg';
import ocean4 from '../public/ocean-4.jpeg';
import ocean5 from '../public/ocean-5.jpeg';
import { useRef } from 'react';

const tabs = [
  {
    key: 'all',
    display: 'All',
  },
  {
    key: 'digital',
    display: 'Digital',
  },
  {
    key: 'Analogic',
    display: 'Analogic',
  },
];

const images = [ocean1, ocean2, ocean3, ocean4, ocean5];

export default function Home() {
  const lightboxRef = useRef<LightGallery | null>(null);

  return (
    <div className="h-full overflow-auto">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image
        className="fixed left-0 top-0 z-0"
        src={bgImage}
        alt="placeholder"
        placeholder="blur"
        priority={true}
      />

      <div className="fixed left-0 top-0 w-full h-full z-10 from-stone-900 bg-gradient-to-t"></div>

      <header className="fixed top-0 w-full z-30 flex justify-between items-center h-[90px] px-6">
        <div>Photography Portfolio</div>
        <Link
          href="#"
          className="hidden rounded-3xl bg-slate-200 text-stone-600 px-3 py-2 hover:bg-opacity-90"
        >
          Get in touch
        </Link>
      </header>

      <main className="relative pt-[110px] z-20">
        <div className="flex flex-col items-center h-full">
          <Tab.Group>
            <Tab.List className="flex items-center gap-12">
              {tabs.map((tab) => (
                <Tab key={tab.key} className="p-2">
                  {({ selected }) => (
                    <span
                      className={classNames(
                        'uppercase',
                        selected ? 'text-white' : 'text-stone-600'
                      )}
                    >
                      {tab.display}
                    </span>
                  )}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="h-full max-w-[900px] w-full p-2 sm:p-4 my-6">
              <Tab.Panel>
                <Masonry
                  breakpointCols={2}
                  className="flex gap-4"
                  columnClassName=""
                >
                  {images.map((image, idx) => (
                    <Image
                      key={image.src}
                      src={image}
                      alt="placeholder"
                      className="my-4 hover:opacity-70 cursor-pointer"
                      placeholder="blur"
                      onClick={() => {
                        lightboxRef.current?.openGallery(idx);
                      }}
                    />
                  ))}
                </Masonry>

                <LightGalleryComponent
                  onInit={(ref) => {
                    if (ref) {
                      lightboxRef.current = ref.instance;
                    }
                  }}
                  speed={500}
                  plugins={[lgThumbnail, lgZoom]}
                  dynamic
                  dynamicEl={images.map((image) => ({
                    src: image.src,
                    thumb: image.src,
                  }))}
                />
              </Tab.Panel>
              <Tab.Panel>Digital Content</Tab.Panel>
              <Tab.Panel>Analogic Content</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </main>

      <footer className="relative h-[90px] z-20 flex justify-center items-center uppercase text-lg font-medium">
        <p>Photography Portfolio</p>
      </footer>
    </div>
  );
}
