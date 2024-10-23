import Image from 'next/image';
import Head from 'next/head';
import { FC } from 'react';
import Navbar from './Navbar';

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Portfolio - Home</title>
      </Head>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-11/12 md:w-2/3 lg:w-1/2">
          <div className="relative h-64 w-full">
            <Image
              src="/axcel.jpg"
              alt="Profile Picture"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-800">Axcel&apos;s Portfolio</h1>
            <p className="text-gray-600 mt-2">
              Welcome to my portfolio. I am passionate about web development, and this space showcases some of my best work.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
