// src/components/ItemListContainer.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../services/firebase/firebaseConfig";
import { Container } from 'react-bootstrap';
import { ItemList } from './ItemList';


const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const productsCollection = collection(db, 'products'); 

    getDocs(productsCollection).then((querySnapshot) => {
      let productsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      if (categoryId) {
        productsData = productsData.filter(
          (product) => product.categoria === categoryId
        );
      }
     
      productsData.sort((a, b) => a.categoria.localeCompare(b.categoria));
      setProducts(productsData);
    });
  }, [categoryId]);

  if (!products.length) return <div className="loading">Cargando...</div>;

  return (
    <Container className="mt-5">
      <h2>{greeting}</h2>
      <ItemList products={products} />
    </Container>
  );
};

export default ItemListContainer;
