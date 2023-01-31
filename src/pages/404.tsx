import '../app/globals.css';

import Image from 'next/image';
import Link from 'next/link';
import NotFoundImage from '@/images/404.png';

export default function NotFound() {
  return (
    <>
      <Image src={NotFoundImage} alt="" fill />
      <div
        id="backdrop"
        className="backdrop-blur fixed inset-0 z-10 w-full h-full"
      />
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
        <p className="mb-8 text-4xl italic">404 NOT FOUND</p>
        <p className="mb-4">
          Hello, tale wanderer. You seem to be lost in a dense forest.
        </p>
        <button className="hover:bg-gray-200 p-4 text-black bg-white rounded-lg">
          <Link href="/">Go back to the homepage</Link>
        </button>
      </div>
    </>
  );
}
