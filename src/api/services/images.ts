import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import makeRequest from 'api/index';

type IGenerateImageParams = {
  page: number;
  limit?: number;
};

type IImagesData = {
  images: any[];
};

/**
 * Function to generate an  image based on provided parameters.
 *
 * @param {IGenerateImageParams} params - Parameters for generating the image.
 *
 * @returns {Promise<IImagesData>} - Promise that resolves to image data.
 *
 */
const generateImages = async (params: IGenerateImageParams): Promise<any> => {
  const response = await makeRequest.get(`/photos?page=${params.page || 1}`, {
    ...params
  });
  return response;
};

/**
 * Custom hook to use for generating an  image with React Query.
 *
 * @param {IGenerateImageParams} params - Parameters for generating the image.
 * @param {UseQueryOptions<IImagesData>} options - Options for the useQuery hook.
 *
 * @returns {QueryResult<IImagesData>} - Query result for generating the image.
 *
 */
export const useGenerateImages = (
  params: IGenerateImageParams,
  options?: UseQueryOptions<IImagesData>
) => {
  return useQuery<any>({
    queryKey: ['images', params],
    queryFn: () => generateImages(params),
    ...options,
  });
};
