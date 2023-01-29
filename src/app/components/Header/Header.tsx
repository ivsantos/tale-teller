import ExternalIcon from '@/images/external-link.png';
import Image from 'next/image';
import Link from 'next/link';
import LogoImage from '@/images/logo.png';
import MoonImage from '@/images/moon.png';

export default function Header() {
  return (
    <header className="grid h-48 mx-4 text-center">
      <Image
        className="animate-wiggle left-4 absolute -mt-2"
        alt="Moon"
        src={MoonImage}
        width={150}
        height={150}
        priority
      />
      <nav>
        <ul className="flex items-center justify-center h-full mb-5">
          <li>
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
