import { FC } from 'react';
import { useGenerateImages } from 'api/services';

/**
 * The `Images` component fetches and displays a grid of images.
 * It uses the `useGenerateImages` hook to retrieve images and handle loading and error states.
 *
 * @component
 * @example
 * return (
 *   <Images />
 * )
 */
const Images: FC = () => {
  const {
    isLoading,
    error,
    data: images,
  } = useGenerateImages({
    page: 1,
  });

  if (isLoading) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-6 gap-4 sm:grid-cols-1 md:grid-cols-4">
        {images.length > 0
          ? images.map((img: any, i: number) => (
              <img
                key={i}
                className="mt-4 h-auto max-w-full"
                src={img?.urls?.thumb}
                alt={img?.alt_description}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default Images;
