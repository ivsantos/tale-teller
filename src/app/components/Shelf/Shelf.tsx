'use client';

import Link from 'next/link';
import Tale from '../Tale/Tale';
import useGetTale from '@/hooks/useGetTale/useGetTale';

interface ShelfProps {
  id: string;
}

export default function Shelf({ id }: ShelfProps) {
  const { tale } = useGetTale({ id });

  return tale ? (
    <div className="place-items-center grid mb-8">
      <Link href="/shelf" className="mb-4 underline">
        ⬅ Go back to the shelf
      </Link>
      <h2 className="-mb-10 font-bold underline">{tale.title}</h2>
      <Tale
        text={tale.text}
        input={tale.title || ''}
        customCover={tale.cover}
        id={id}
      />

      <Link href="/" className="-mt-10 underline">
        📙 Generate your custom tale now!
      </Link>
    </div>
  ) : null;
}
