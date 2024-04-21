'use server';

import {
  BlobAccessError,
  BlobStoreNotFoundError,
  BlobUnknownError,
  list,
} from '@vercel/blob';

// export const runtime = 'edge';

export async function getAllImages() {
  try {
    const { blobs } = await list();

    return blobs;
  } catch (err) {
    if (err instanceof BlobAccessError) {
      console.error('Error: ', err.message);
    }

    if (err instanceof BlobStoreNotFoundError) {
      console.error('Error: ', err.message);
    }

    if (err instanceof BlobUnknownError) {
      console.error('Error: ', err.message);
    }
    return [];
  }
}
