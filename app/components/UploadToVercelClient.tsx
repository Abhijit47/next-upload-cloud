'use client';

import type { PutBlobResult } from '@vercel/blob';
import Image from 'next/image';
import { FormEvent, useRef, useState } from 'react';

export default function UploadToVercelClient() {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);

  async function uploadFile(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!inputFileRef.current?.files) {
      throw new Error('No file selected');
    }

    const file = inputFileRef.current.files[0];

    const response = await fetch(`/api/images/upload?filename=${file.name}`, {
      method: 'POST',
      body: file,
      headers: {
        'Content-Disposition': `attachment; filename=${file.name}.${file.type}`,
      },
    });

    const newBlob = (await response.json()) as PutBlobResult;
    // console.log('new blob', newBlob);

    setBlob(newBlob);

    // reset the form
    formRef.current?.reset();
  }

  return (
    <div className={'w-full'}>
      <form
        ref={formRef}
        onSubmit={uploadFile}
        className='flex flex-col gap-4 p-4 ring-1 rounded-md ring-indigo-600'>
        <input
          name='file'
          ref={inputFileRef}
          type='file'
          accept='images/*'
          className={'ring-1 ring-indigo-600 rounded-md px-2 py-4'}
          required
        />
        <button
          type='submit'
          className={
            'px-6 py-3 rounded-md shadow-lg hover:shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200 ease-in-out'
          }>
          Upload
        </button>
      </form>
      {blob && (
        <div>
          Blob url:{' '}
          <a download={blob.downloadUrl} href={blob.url} target='_blank'>
            {blob.url}
          </a>
          <div>
            <Image
              src={blob.url}
              alt='avatar'
              width={200}
              height={200}
              className='rounded-md object-cover h-full w-full'
            />
          </div>
        </div>
      )}
    </div>
  );
}
