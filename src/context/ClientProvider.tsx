"use client";

import { ApolloProvider } from "@apollo/client";
import { client } from "../graphql/client";

const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ClientProvider;
