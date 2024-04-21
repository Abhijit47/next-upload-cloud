'use server';

import { list } from '@vercel/blob';

// for runtime 'edge' we need to use the get function
// export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const { blobs } = await list();

    return Response.json(blobs);
  } catch (err) {
    if (err instanceof Error) {
      console.log('error', err.message);
      return Response.error();
    }
  }
}
