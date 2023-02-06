import ExternalIcon from '@/images/external-link.png';
import GitHub from '@/images/github.png';
import Image from 'next/image';
import Link from 'next/link';
import LogoImage from '@/images/logo.png';
import MoonImage from '@/images/moon.png';

export default function Header() {
  return (
    <header className="grid h-40 mx-4 text-center">
      <Image
        className="animate-wiggle left-0 md:left-4 absolute w-16 h-16 md:w-[150px] md:h-[150px] -mt-2 sm:w-[80px] sm:h-[80px]"
        alt="Moon"
        src={MoonImage}
      />
      <nav>
        <ul className="flex items-center justify-center h-full">
          <li>
            <Link href="/" title="Back to homepage">
              <h1>
                <Image
                  alt="Tale Teller Logo"
                  src={LogoImage}
                  width={250}
                  priority
                />
              </h1>
            </Link>
          </li>
        </ul>
      </nav>
      <a
        className="md:right-4 hover:text-gray-600 md:mt-8 absolute right-0 flex items-center gap-2 mt-4 mr-2"
        href="https://github.com/ivsantos/tale-teller"
        rel="noopener noreferrer"
        target="_blank"
      >
        <span className="md:block font-extralight hidden">View code</span>
        <Image width={32} height={32} alt="GitHub" src={GitHub} priority />
      </a>
      <h2 className="italic">
        <a
          title="External link to Cohere AI"
          className="underline"
          href="https://dashboard.cohere.ai/"
          target="_blank"
          rel="noopener noreferrer"
        >
          AI-based
          <Image
            className="inline-block mx-1 mb-1"
            alt="Cohere AI Logo"
            src={ExternalIcon}
            width={14}
            height={14}
            priority
          />
        </a>{' '}
        tale generator conceived for a better sleep 💤
      </h2>
    </header>
  );
}
