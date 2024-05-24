import React from 'react';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { ItemDetail } from './ItemDetail';
import { db } from "../services/firebase/firebaseConfig";
import { useAsync } from '../hooks/useAsync';

export const ItemDetailContainer = () => {
  const { id } = useParams();

  const { loading, data: product, error } = useAsync(async () => {
    console.log("Received ID:", id);
    const itemRef = doc(db, 'products', id);
    console.log("Document reference:", itemRef.path);

    const docSnap = await getDoc(itemRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      console.error('No such document!');
      throw new Error('No such document!');
    }
  }, [id]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error.message}</p>
      ) : product ? (
        <ItemDetail product={product} />
      ) : null}
    </div>
  );
};

export default ItemDetailContainer;
