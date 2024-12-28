import React, { Suspense } from "react";
import ClientProvider from "../context/ClientProvider";
import SearchInput from "../components/SearchInput";
import Result from "../components/Result";

export default function Home() {
  return (
    <ClientProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <div style={{ padding: 10 }}>
          <h1>Search Pokémon</h1>
          <SearchInput />
          <Result />
        </div>
      </Suspense>
    </ClientProvider>
  );
}
