import Link from 'next/link';

export default function VercelBlobUpload() {
  return (
    <main
      className={
        'max-w-lg mx-auto h-[calc(100dvh-8rem)] flex flex-col gap-y-8 items-center justify-center'
      }>
      <h1 className={'text-center text-2xl font-bold'}>Upload Your Images</h1>
      <div className={'flex items-center gap-x-4'}>
        <Link
          href='/vercel-blob/server'
          className={'px-6 py-2 bg-indigo-500 rounded-md text-white text-base'}>
          Server Side
        </Link>
        <Link
          href='/vercel-blob/client'
          className={'px-6 py-2 bg-indigo-500 rounded-md text-white text-base'}>
          Client Side
        </Link>
        <Link
          href='/vercel-blob/gallery'
          className={'px-6 py-2 bg-indigo-500 rounded-md text-white text-base'}>
          Vercel Gallery
        </Link>
      </div>
    </main>
  );
}
