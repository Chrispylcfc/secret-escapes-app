import { gql, QueryHookOptions, useQuery } from '@apollo/client';
import { ISaleDetail } from '../types';

type SaleResponse = {
  sale: ISaleDetail;
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