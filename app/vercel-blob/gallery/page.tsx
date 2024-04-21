import { getAllImages } from '@/libs/downloadAction';
import Image from 'next/image';
import Link from 'next/link';

export default async function VercelGallery() {
  const images = await getAllImages();

  return (
    <main
      className={'max-w-7xl mx-auto my-10 flex items-center justify-center'}>
      <div className={'flex flex-col gap-y-8 items-center'}>
        <h1 className={'text-3xl text-center font-semibold'}>Vercel Gallery</h1>
        <div className={'grid grid-cols-3 gap-4'}>
          {images.map((image) => (
            <Image
              key={image.size}
              src={image.url}
              alt={image.pathname}
              width={300}
              height={300}
              className={'w-full h-full object-cover rounded-md'}
            />
          ))}
        </div>

        <Link
          href='/vercel-blob'
          className={'px-6 py-2 bg-indigo-500 rounded-md text-white text-base'}>
          Go Back
        </Link>
      </div>
    </main>
  );
}
