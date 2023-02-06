'use client';

import Link from 'next/link';
import useGetTales from '@/hooks/useGetTales/useGetTales';

export default function ShelfList() {
  const { tales } = useGetTales();

  if (!tales) return null;

  return tales.length > 0 ? (
    <section>
      {tales.map((tale) => {
        return (
          <article
            aria-label={`Redirects to the tale page with title: ${tale.title}`}
            key={tale.id}
            className="p-4 mx-4 mb-8 border-2 border-black border-dashed"
          >
            <Link href={`/shelf/${tale.id}`}>
              <h3 className="mb-4 font-semibold">{tale.title}</h3>
              <p>{`${tale.text.substring(0, 100)}...`}</p>
            </Link>
          </article>
        );
      })}
    </section>
  ) : (
    <section className="place-items-center grid">
      <h2 className="mb-4 text-xl">There are no tales yet! 😱</h2>
      <p>
        Generate one now at{' '}
        <Link href="/" className="underline">
          the home page.
        </Link>
      </p>
    </section>
  );
}
