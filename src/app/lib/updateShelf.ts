import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db, storage } from '@/lib/firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

import { v4 } from 'uuid';

interface UpdateShelfProps {
  input: string;
  text: string;
  coverURI: string;
}

export default async function updateShelf({
  input,
  text,
  coverURI,
}: UpdateShelfProps) {
  const storageRef = ref(storage, `images/cover${v4()}.jpg`);

  const cover = await fetch(coverURI);
  const coverBlob = await cover.blob();

  const uploaded = await uploadBytes(storageRef, coverBlob);
  const downloadURL = await getDownloadURL(uploaded.ref);

  const taleRef = await addDoc(collection(db, 'tales'), {
    title: input,
    text,
    cover: downloadURL,
    timestamp: serverTimestamp(),
  });
  return taleRef;
}
