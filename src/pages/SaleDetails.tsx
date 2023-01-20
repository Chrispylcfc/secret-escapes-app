import React from 'react';
import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { SaleDetail } from '../components/SaleDetail';
import { useSaleQuery } from '../hooks/useSaleQuery';

export const SaleDetails = () => {
  const { id } = useParams();

  const { loading, data, error } = useSaleQuery({ variables: { saleId: id } });

  if (error) {
    throw new Response(error.message, { status: 500 });
  }

  return (
    <>
      {loading && (
        <Typography variant="body1">Loading...</Typography>
      )}
      
      {data && (
        <SaleDetail sale={data.sale} />
      )}
    </>
  );
}