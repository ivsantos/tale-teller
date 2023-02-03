import cohere from 'cohere-ai';

export default async function generate(input: string) {
  if (!input) {
    return null;
  }

  cohere.init(process.env.NEXT_PUBLIC_COHERE_API_KEY!, '2022-12-06');
  const response = await cohere.generate({
    model: 'command-xlarge-20221108',
    prompt: `Give me a happy tale that starts with: "${input}" with a definite ending.`,
    max_tokens: 500,
    temperature: 0.9,
    end_sequences: ['---'],
  });

  return response;
}
