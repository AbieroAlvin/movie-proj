import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { BsFillPlayCircleFill } from "react-icons/bs";
import "./landing-page.css";
import imdbLogo from "../../assets/imdb2.svg";

import tomato from "../../assets/tomato.svg";
import Navbar from "../navbar/Navbar";
import Pagination from "../pagination/Pagination";

const LandingPage = () => {
  const [movieData, setMovieData] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState("initial-image.jpg");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const apiKey = "02411427b29c1d32a5c3b974c0b44e4d";
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
        );
        const popularMovies = response.data.results;
        const randomMovie =
          popularMovies[Math.floor(Math.random() * popularMovies.length)];
        setMovieData(randomMovie);

        setBackgroundImage(
          `https://image.tmdb.org/t/p/original/${randomMovie.poster_path}`
        );
      } catch (err) {
        console.error("Error fetching random movie:", err);
      }
    };

    fetchMovies();

    const interval = setInterval(fetchMovies, 10000);

    return () => clearInterval(interval);
  }, []);

  const backgroundStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "600px",
    transition: "background-image 2s"
  };

  return (
    <>
      <section className="landingPage">
        <div style={backgroundStyle} className="l-container">
          <Navbar />
          <div className="l-movieContainer">
            <div className="l-movie-info">
              {movieData && (
                <>
                  <Link to={`/movie/${movieData.id}`} className="title">
                    {movieData.title}
                  </Link>
                  <div className="l-rating">
                    <div className="imdb">
                      <img src={imdbLogo} alt="/" />
                      <p>{movieData.vote_average} / 10</p>
                    </div>
                    <div className="tomato">
                      <img src={tomato} alt="/" />
                      <p>{movieData.vote_average * 10} % </p>
                    </div>
                  </div>
                  <p className="l-overview">{movieData.overview}</p>
                  <button className="l-trailer">
                    <BsFillPlayCircleFill className="text-white" />
                    <p>WATCH TRAILER</p>
                  </button>
                </>
              )}
            </div>
            <Pagination />
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
