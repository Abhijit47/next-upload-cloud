import Link from 'next/link';

export default function Navbar() {
  return (
    <header
      className={'sticky bg-slate-900 top-0 z-50 border-b border-indigo-500'}>
      <nav className={'flex py-4 px-4 justify-between items-center'}>
        <Link href='/'>
          <p className={'text-2xl font-semibold text-white'}>Cloud Upload</p>
        </Link>

        <ul className={'flex gap-x-4'}>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/s3-upload'>S3 Upload</Link>
          </li>
          <li>
            <Link href='/file-stack'>File Stack</Link>
          </li>
          <li>
            <Link href='/vercel-blob'>Vercel</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
