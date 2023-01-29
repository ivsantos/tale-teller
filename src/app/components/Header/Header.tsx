import Link from 'next/link';

export default function Header() {
  return (
    <header className="place-content-center grid gap-4 mx-4 mb-12 text-center">
      <nav>
        <ul>
          <li>
            <Link href="/">
              <h1 className="text-2xl">Tale Teller</h1>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
