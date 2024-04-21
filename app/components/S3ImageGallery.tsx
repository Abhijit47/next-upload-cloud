import Image from 'next/image';

export default function S3ImageGallery({ urls }: { urls: string[] }) {
  return (
    <section className={'my-16 space-y-6'}>
      <h1 className={'text-white text-4xl text-center font-bold'}>
        S3 Bucket Images
      </h1>
      <div className={'grid grid-cols-3 gap-8 px-8'}>
        {urls.map((url, idx) => (
          <Image
            key={idx}
            src={url}
            alt={`bucket_image_${idx}`}
            width={300}
            height={200}
            className={'object-cover h-full w-full ring-1 ring-indigo-500'}
          />
        ))}
      </div>
    </section>
  );
}
