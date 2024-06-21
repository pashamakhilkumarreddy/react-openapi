import { FC, useState } from 'react';
import { OpenAI } from 'openai';
import { OPENAPI_KEY } from 'config';
import { useTranslation } from 'react-i18next';
import useImageStore from 'store/images';

/**
 * The `Home` component represents the main page where users can input a prompt to generate images using OpenAI's API.
 * It provides a text area for prompt input, a button to trigger image generation, and a gallery to display generated images.
 *
 * @component
 * @example
 * return (
 *   <Home />
 * )
 */
const Home: FC = () => {
  const { t } = useTranslation();
  const prompt = useImageStore((state) => state.prompt);
  const setPrompt = useImageStore((state) => state.setPrompt);
  const [images, setImages] = useState<string[]>([]);

  const openai = new OpenAI({
    apiKey: OPENAPI_KEY!,
    dangerouslyAllowBrowser: true,
  });

  const generateImage = async () => {
    try {
      const res = await openai.images.generate({
        n: 1,
        prompt: prompt,
        model: 'dall-e-2',
        size: '1024x1024',
        quality: 'standard',
      });
      setImages((val = []) =>
        res.data[0].url ? [...val, res.data[0].url] : val
      );
    } catch (error) {
      console.error('Error generating image:', error);
    }
  };

  return (
    <div className="container mx-auto">
      <h2 className="mb-4 text-xl font-bold text-neutral-950">
        {t('home.welcome')}
      </h2>
      <textarea
        className="mb-4 w-full rounded border border-gray-300 p-3 text-neutral-950"
        placeholder="Explore the depiction of whimsical owls in the 'Sunflowers' series by the painter Emil Nolde.."
        onChange={(e) => setPrompt(e.target.value)}
        rows={3}
      />
      <button
        className="rounded bg-teal-900 px-4 py-2 text-white hover:bg-teal-700"
        onClick={generateImage}
      >
        {t('home.image')}
      </button>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {images.length > 0
          ? images.map((img, i) => (
              <img
                key={i}
                className="mt-4 h-auto max-w-full"
                src={img}
                alt=""
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default Home;
