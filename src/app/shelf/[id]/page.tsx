import Shelf from '@/components/Shelf/Shelf';

export default function ShelfPage({ params }: { params: { id: string } }) {
  return <Shelf id={params.id} />;
}
