import { uploadImage } from '@/libs/uploadAction';

export default function UploadToVercelServer() {
  return (
    <div className={'w-full'}>
      <form
        action={uploadImage}
        className='flex flex-col gap-4 p-4 ring-1 rounded-md ring-indigo-600'>
        <label htmlFor='image'>Image</label>
        <input
          type='file'
          id='image'
          name='image'
          required
          accept='images/*'
          className={'ring-1 ring-indigo-600 rounded-md px-2 py-4'}
        />
        <button
          type='submit'
          className={
            'px-6 py-3 rounded-md shadow-lg hover:shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200 ease-in-out'
          }>
          Upload
        </button>
      </form>
    </div>
  );
}
