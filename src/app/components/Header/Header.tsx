import Image from 'next/image';
import Link from 'next/link';
import MoonImage from '@/images/moon.png';

export default function Header() {
  return (
    <header className="grid gap-4 mx-4 mb-12 text-center">
      <nav>
        <ul>
          <li className="flex items-center">
            <Image
              alt="Moon"
              className="animate-wiggle -mt-2"
              src={MoonImage}
              priority
              width={150}
              height={150}
            />
            <Link href="/" title="Back to homepage">
              <h1 className="text-2xl">Tale Teller</h1>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
