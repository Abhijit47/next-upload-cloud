import UploadToVercelServer from '@/app/components/UploadToVercelServer';
import Link from 'next/link';

export default function ServerStrategy() {
  return (
    <main
      className={
        'max-w-lg mx-auto h-[calc(100dvh-8rem)] flex items-center justify-center'
      }>
      <div className={'flex flex-col gap-y-8 items-center'}>
        <h1 className={'text-3xl text-center font-semibold'}>
          Server Strategy
        </h1>

        <UploadToVercelServer />

        <Link
          href='/vercel-blob'
          className={'px-6 py-2 bg-indigo-500 rounded-md text-white text-base'}>
          Go Back
        </Link>
      </div>
    </main>
  );
}
