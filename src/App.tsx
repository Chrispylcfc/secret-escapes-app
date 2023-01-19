import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Home, SearchResults } from './pages';

import './App.css';

const client = new ApolloClient({
  uri: 'https://staging.sparrow.escapes.tech/graphql/',
  cache: new InMemoryCache(),
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<><Outlet /></>}>
      <Route path="/" element={<Home />} />
      <Route path="search" element={<SearchResults />} />
      <Route path="sale/:id" element={<div>Sale ID Page</div>} />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <RouterProvider router={router} />
      </ApolloProvider>
    </div>
  );
}

export default App;
