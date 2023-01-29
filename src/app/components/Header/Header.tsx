import Image from 'next/image';
import Link from 'next/link';
import LogoImage from '@/images/logo.png';
import MoonImage from '@/images/moon.png';

export default function Header() {
  return (
    <header className="grid h-48 gap-4 mx-4 text-center">
      <Image
        className="animate-wiggle left-4 absolute -mt-2"
        alt="Moon"
        src={MoonImage}
        width={150}
        height={150}
        priority
      />
      <nav>
        <ul className="flex items-center justify-center h-full">
          <li className="-mt-8">
            <Link href="/" title="Back to homepage">
              <h1>
                <Image
                  alt="Tale Teller Logo"
                  src={LogoImage}
                  width={250}
                  height={250}
                  priority
                />
              </h1>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
