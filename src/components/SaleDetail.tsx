import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { ISaleDetail } from '../api/types';

interface Props {
  sale: ISaleDetail;
}

export const SaleDetail = ({ sale }: Props) => {
  return (
    <Card sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        sx={{ height: '300px' }}
        image={sale.photos[0].url}
        alt={sale.editorial.destinationName}
      />
      <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <Typography variant="h6">
              {sale.editorial.destinationName}
            </Typography>
            <Typography variant="body1">
              {sale.editorial.title}
            </Typography>
          </div>
          <Typography variant="h6">{sale.prices.leadRate.forDisplay}</Typography>
        </Box>

        <Typography variant="body2">
          <div dangerouslySetInnerHTML={{ __html: sale.editorial.hotelDetails }} />
        </Typography>
      </CardContent>
    </Card>
  );
}