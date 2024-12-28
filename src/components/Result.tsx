"use client";
import { useQuery } from "@apollo/client";
import { GET_POKEMON_LISTS, GET_POKEMON_BY_NAME } from "../graphql/queries";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

const Result = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");

  const [first, setFirst] = useState(20);
  const [pokemons, setPokemons] = useState([]);

  // Query to fetch Pokémon by name if a search term is provided
  const {
    loading: loadingByName,
    error: errorByName,
    data: dataByName,
  } = useQuery(GET_POKEMON_BY_NAME, {
    variables: { name },
    skip: !name, // Skip query if no name is provided
  });

  // Query to fetch the Pokémon list if no search term is provided
  const {
    loading: loadingList,
    error: errorList,
    data: dataList,
  } = useQuery(GET_POKEMON_LISTS, {
    variables: { first },
    skip: !!name, // Skip query if a search term is provided
  });

  // Append new Pokémon data to the list when data changes
  useEffect(() => {
    if (name && dataByName) {
      const pokemon = dataByName.pokemon;
      if (pokemon) {
        let arrPokemon = [];
        arrPokemon.push(pokemon);

        setPokemons(arrPokemon);
      }
    } else if (dataList?.pokemons) {
      setPokemons(dataList.pokemons);
    }
  }, [dataByName, dataList]);

  // Loading states
  if (loadingByName || (loadingList && pokemons.length === 0))
    return <p>Loading...</p>;

  // Error states
  if (errorByName) return <p>Error: {errorByName.message}</p>;
  if (errorList) return <p>Error: {errorList.message}</p>;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Pokémon List</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",

          width: "100%",
        }}
      >
        {pokemons.map((pokemon: any) => (
          <div key={pokemon.id} style={{ width: "16%", margin: 8 }}>
            <img
              src={pokemon.image}
              alt={pokemon.name}
              width={"100%"}
              height={150}
              style={{}}
            />
            <p>Name: {pokemon.name}</p>
            <p>Types: {pokemon.types.join(", ")}</p>
          </div>
        ))}
      </div>
      {loadingList && <p>Loading more Pokémon...</p>}

      {pokemons.length > 1 && (
        <button
          style={{ margin: 20 }}
          onClick={() => {
            setFirst((prev) => prev + 20);
          }}
          disabled={loadingList}
        >
          {loadingList ? "Loading..." : "Load More"}
        </button>
      )}
    </div>
  );
};

export default Result;
