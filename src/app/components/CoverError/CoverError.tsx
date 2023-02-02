import Image from 'next/image';

interface CoverErrorProps {
  error: string;
}

export default function CoverError({ error }: CoverErrorProps) {
  return (
    <div className="my-6">
      <span>{`Something went wrong while loading the tale cover. Error: ${error}`}</span>
      <Image
        alt="Cover placeholder"
        src="https://via.placeholder.com/256"
        width={256}
        height={256}
        className="shadow-gray-600 mx-auto my-0 rounded-md shadow-lg"
      />
    </div>
  );
}
