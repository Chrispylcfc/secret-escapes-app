import React from 'react';
import { useParams } from 'react-router-dom';

export const SaleDetails = () => {
  const { id } = useParams();

  return (
    <p>Sale ID Page {id}</p>
  );
}