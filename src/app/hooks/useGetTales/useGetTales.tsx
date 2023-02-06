import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';

import { db } from '@/lib/firebase';

export interface FirebaseTale {
  id: string;
  title: string;
  text: string;
  cover: string;
  timestamp: number;
}

export default function useGetTales() {
  const [tales, setTales] = useState<FirebaseTale[]>();

  const getTales = async () => {
    const q = query(collection(db, 'tales'), orderBy('timestamp', 'desc'));
    const querySnapshot = await getDocs(q);
    const tales = querySnapshot.docs.map((doc) => {
      return {
        ...doc.data(),
        id: doc.id,
      } as FirebaseTale;
    });
    setTales(tales);
  };

  useEffect(() => {
    getTales();
  }, []);

  return { tales };
}
