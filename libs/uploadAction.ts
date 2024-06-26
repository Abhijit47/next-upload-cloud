'use server';

import { put } from '@vercel/blob';
import { revalidatePath } from 'next/cache';

export async function uploadImage(formData: FormData) {
  const imageFile = formData.get('image') as File;
  const blob = await put(imageFile.name, imageFile, {
    access: 'public',
    // contentType: imageFile.type,
  });
  revalidatePath('/');
  return blob;
}
