import { FC, useEffect, useRef } from 'react';
import { useGenerateImages } from 'api/services';

/**
 * The `Images` component fetches and displays a grid of images.
 * It uses the `useGenerateImages` hook to retrieve images and handle loading and error states.
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
    data: images = [],
  } = useGenerateImages({
    page: 1,
  });

  const imageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.info(entry.isIntersecting);
        observer.disconnect();
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const currentLastImage = imageRef.current;
    if (currentLastImage) {
      observer.observe(currentLastImage);
    }

    return () => {
      if (currentLastImage) {
        observer.unobserve(currentLastImage);
      }
    };
  }, [images]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>An error has occurred: {error.message}</p>;

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-4 gap-4 sm:grid-cols-1 md:grid-cols-1">
        {images.length > 0 ? (
          images.map((img: any, i: number) => (
            <img
              key={i}
              // @ts-ignore
              ref={i === images.length - 2 ? imageRef : null} // Attach ref to the last image
              className="img-full mt-4 h-auto max-w-full"
              src={img.urls.thumb}
              alt={img.alt_description}
              loading="lazy"
              decoding="async"
            />
          ))
        ) : (
          <p>No images found.</p>
        )}
      </div>
    </div>
  );
};

export default Images;
