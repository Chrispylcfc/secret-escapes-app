import { gql, QueryHookOptions, useQuery } from '@apollo/client';

export type Editorial = {
  title: string;
  destinationName: string;
}

export type Photo = {
  url: string;
}

export type Sale = {
  id: string;
  editorial: Editorial;
  photos: Photo[];
}

type SalesResponse = {
  saleSearch: {
    resultCount: number;
    sales: Sale[];
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