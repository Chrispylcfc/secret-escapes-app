import { gql, QueryHookOptions, useQuery } from '@apollo/client';
import { ISearchItem } from '../types';

type SalesResponse = {
  saleSearch: {
    resultCount: number;
    sales: ISearchItem[];
  }
};

const GetSalesResponse = gql`
  query GetSales($query: String!) {
    saleSearch(query: $query, travelTypes: "HOTELS_ONLY") {
      resultCount
      sales(limit: 10, offset: 0) {
        id
        editorial {
          title
          destinationName
        }
        photos {
          url
        }
      }
    }
  }
`;

export function useSalesSearchQuery(options?: QueryHookOptions) {
  return useQuery<SalesResponse>(GetSalesResponse, options);
}