import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client =  createClient({
    projectId: 'x8wi6e6e',
    dataset: 'production',
    apiVersion: '2023-09-10',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);