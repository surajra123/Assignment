import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieList from "./components/MovieList.js";
import MovieDetail from "./components/MovieDetail.js";
import FilterMovies from "./components/FilterMovies.js";
import OrderMovies from "./components/OrderMovies.js";

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [filterText, setFilterText] = useState("");
  const [orderBy, setOrderBy] = useState("year");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://swapi.dev/api/films/?format=json"
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Other logic for filtering and ordering

  return (
    <>
      <div style={{ display: "flex" , backgroundColor:"lightgray", padding:"18px"}}>
        <OrderMovies orderBy={orderBy} setOrderBy={setOrderBy} />
        <FilterMovies filterText={filterText} setFilterText={setFilterText} />
      </div>

      <div style={{ display: "flex"}}>
      <MovieList movies={movies} setSelectedMovie={setSelectedMovie} />
      <div style={{ borderLeft: "1px solid #000000", padding:"10px",  height:"100vh" }}></div>
      {selectedMovie && <MovieDetail movie={selectedMovie} />}
      </div>
    </>
  );
}

export default App;
