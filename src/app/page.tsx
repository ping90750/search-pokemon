import ClientProvider from "../context/ClientProvider";
import SearchInput from "../components/SearchInput";
import Result from "../components/Result";

export default function Home() {
  return (
    <ClientProvider>
      <div style={{ padding: 10 }}>
        <h1>Search Pokémon</h1>
        <SearchInput />
        <Result />
      </div>
    </ClientProvider>
  );
}
