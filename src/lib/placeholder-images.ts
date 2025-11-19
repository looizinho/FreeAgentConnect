import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export const placeholderImages: ImagePlaceholder[] = data.placeholderImages;


export const getImage = (id: string): ImagePlaceholder => {
    const image = placeholderImages.find(img => img.id === id);
    if (!image) {
        // Return a fallback or throw an error if the image is not found
        // This helps in debugging missing image assets.
        return {
          id: 'not-found',
          description: 'Image not found',
          imageUrl: 'https://picsum.photos/seed/notfound/600/400',
          imageHint: 'placeholder'
        }
    }
    return image;
}
