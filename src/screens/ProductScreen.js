import React from 'react';
import { useParams } from 'react-router-dom';

export default function ProductScreen() {
  //Using useParam Hook function
  const params = useParams();
  const { slug } = params;
  return (
    <div>
      <h1>{slug}</h1>
    </div>
  );
}
