"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

const SearchInput = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [search, setSearch] = useState(searchParams.get("name") || "");

  const handleSearch = () => {
    // Update the URL with the search query parameter
    if (search) {
      // Set the `name` query parameter in the URL
      router.push(`/?name=${search}`);
    } else {
      router.push(`/`);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for a Pokémon"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchInput;
