import CoverError from '../CoverError/CoverError';
import CoverSpinner from '../CoverSpinner/CoverSpinner';
import Image from 'next/image';
import useCoverPrediction from '@/hooks/useCover/useCover';

interface CoverProps {
  input: string;
}

export default function Cover({ input }: CoverProps) {
  const { prediction, loading, error } = useCoverPrediction({ input });

  if (error) {
    return <CoverError error={error} />;
  }

  if (loading) {
    return <CoverSpinner />;
  }

  return prediction ? (
    <Image
      alt="Cover of the tale"
      src={prediction}
      width={256}
      height={256}
      className="shadow-gray-600 mx-auto my-0 mt-8 rounded-md shadow-lg"
    />
  ) : null;
}
