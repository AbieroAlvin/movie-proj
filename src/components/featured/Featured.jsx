import axios from "axios";
import { useEffect, useState } from "react";
import { BsChevronRight } from "react-icons/bs";
import "./featured.css";
import Card from "../card/Card";

const Featured = () => {
  const [movies, setMovies] = useState([]);

  const apiKey = "02411427b29c1d32a5c3b974c0b44e4d";

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
        );
        const movieData = response.data.results;

        setMovies(movieData);

        console.log(response.data.results);
      } catch (err) {
        console.error("Error fetching movies:", err);
      }
    };

    fetchMovies();
  }, []);

  const featuredMovies = movies.slice(0, 10);
  return (
    <section className="f-section">
      <div className="f-container">
        <div className="f-header">
          <p>Featured Movie</p>
          <div>
            See more <BsChevronRight size={20} className="inline-block pl-2" />
          </div>
        </div>
        <div className="f-list">
          {featuredMovies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
