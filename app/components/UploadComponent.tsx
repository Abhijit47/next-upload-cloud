'use client';

import { useS3Upload } from 'next-s3-upload';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function UploadComponent() {
  const [imageUrl, setImageUrl] = useState<string>();
  const { FileInput, openFileDialog, uploadToS3 } = useS3Upload();
  const router = useRouter();

  let handleFileChange = async (file: File) => {
    let { url } = await uploadToS3(file);
    setImageUrl(url);
    router.refresh();
  };

  return (
    <section
      className={'w-full flex flex-col justify-center items-center gap-y-6'}>
      <FileInput onChange={handleFileChange} />

      <button
        onClick={openFileDialog}
        className={
          'px-6 py-2 rounded-md bg-indigo-500 text-white text-base font-medium hover:shadow-sm shadow-lg transition-shadow delay-150 duration-500 ease-in-out'
        }>
        Upload file
      </button>

      {imageUrl && (
        <Image
          src={imageUrl}
          alt='bucket-image'
          width={300}
          height={200}
          style={{ height: 'auto', width: 'auto' }}
          className='object-cover h-full w-full'
        />
      )}
    </section>
  );
}
