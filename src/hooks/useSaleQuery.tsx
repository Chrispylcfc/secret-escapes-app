import { gql, QueryHookOptions, useQuery } from '@apollo/client';
import { Editorial, Photo } from './useSalesSearchQuery';

type EditorialExtended = Editorial & {
  hotelDetails: string;
}

type Price = {
  leadRate: {
    forDisplay: string;
  }
}

export type Sale = {
  editorial: EditorialExtended;
  prices: Price;
  photos: Photo[];
}

type SaleResponse = {
  sale: Sale;
};

const GetSaleResponse = gql`
  query GetSale($saleId: String!) {
    sale(saleId: $saleId) {
      editorial {
        title
        destinationName
        hotelDetails
      }
      prices {
        leadRate {
          forDisplay
        }
      }
      photos {
        url
      }
    }
  }
`;

export function useSaleQuery(options?: QueryHookOptions) {
  return useQuery<SaleResponse>(GetSaleResponse, options);
}