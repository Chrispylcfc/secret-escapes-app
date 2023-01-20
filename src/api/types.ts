type Editorial = {
  title: string;
  destinationName: string;
  hotelDetails: string;
}

type Photo = {
  url: string;
}

type Price = {
  leadRate: {
    forDisplay: string;
  }
}

export type ISearchItem = {
  id: string;
  editorial: Editorial;
  photos: Photo[];
}

export type ISaleDetail = {
  editorial: Editorial;
  prices: Price;
  photos: Photo[];
}