import { doc, getDoc } from 'firebase/firestore';
import { useCallback, useEffect, useState } from 'react';

import { FirebaseTale } from '../useGetTales/useGetTales';
import { db } from '@/lib/firebase';

interface useGetTaleProps {
  id: string;
}

export default function useGetTale({ id }: useGetTaleProps) {
  const [tale, setTale] = useState<FirebaseTale>();

  const getTale = useCallback(async () => {
    const docRef = doc(db, 'tales', id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const retrievedTale = docSnap.data() as FirebaseTale;
      setTale(retrievedTale);
    }
  }, [id]);

  useEffect(() => {
    getTale();
  }, [getTale]);

  return { tale };
}
