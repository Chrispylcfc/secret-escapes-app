import { gql, useQuery } from '@apollo/client';

type Editorial = {
  title: string;
  destinationName: string;
}

type Photo = {
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

export function useSalesQuery(variables: { query: string }) {
  return useQuery<SalesResponse>(GetSalesResponse, { variables });
}