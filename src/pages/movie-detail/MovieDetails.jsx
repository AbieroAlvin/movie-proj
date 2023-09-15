import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../../App.css";

import { AiFillStar, AiOutlineUnorderedList } from "react-icons/ai";
import { IoTicketSharp } from "react-icons/io5";
import Sidebar from "../../components/sidebar/Sidebar";
import Menu from "../../components/Menu";
import { Genres } from "../../components/card/Card";

const apiKey = "02411427b29c1d32a5c3b974c0b44e4d";

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [genres, setGenres] = useState();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
        );
        const data = response.data;
        console.log("Movie Details Response:", data);
        setMovieDetails(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    const fetchMovieGenres = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/genres?api_key=${apiKey}&language=en-US`
        );
        const genreData = response.data.genres;
        console.log("Genre Data:", genreData);
        setGenres(genreData);
      } catch (error) {
        console.error("Error fetching movie genres:", error);
      }
    };

    fetchMovieDetails();
    fetchMovieGenres();
  }, [id]);

  if (!movieDetails) {
    return <span className="loader"></span>;
  }

  console.log("Genres:", genres);
  console.log("Poster URL:", movieDetails.poster_path);

  return (
    <>
      <section className="movie-detailsSection">
        <Sidebar isMenuOpen={isMenuOpen} />
        <div className="movie-detailContainer">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path}`}
            className="movieDetailPoster"
            alt=""
          />
          <div className="moviedetailLay">
            <div className="md-info">
              <div className="md-text">
                <p data-testid="movie-title">{movieDetails.title} ●</p>
                <p data-testid="movie-release-date">
                  {movieDetails.release_date}
                </p>
                <p data-testid="movie-overview">●{movieDetails.runtime} mins</p>

                <Genres genreIds={movieDetails.genre_ids} />
              </div>
              <div className="md-form">
                <div className="md-overview">
                  <p>{movieDetails.overview}</p>
                </div>

                <div className="md-directors">
                  <p>
                    Director: <span> Joseph Kosiniki</span>
                  </p>
                  <p>
                    Writers: <span>Jim cash, Jack epps</span>
                  </p>
                  <p>
                    Stars: <span>Tom cruise, Jennifer Connely</span>
                  </p>

                  <div className="movieDetailTopRated">
                    <p>Top rated movie #65</p>
                    <p>Awards 9 nominations</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md-ratingContainer">
              <div className="md-rating">
                <AiFillStar className="text-yellow-500" />
                <p className="movieDetailVote">{movieDetails.vote_average}</p>
                <p className="movieDetailCount">|{movieDetails.vote_count}</p>
              </div>

              <div className="md-show">
                <button>
                  <IoTicketSharp />
                  See Showtimes
                </button>
                <button>
                  <AiOutlineUnorderedList />
                  More watch options
                </button>
              </div>

              <div className="recommended">
                <div className="recommended-text">
                  <AiOutlineUnorderedList />
                  The Best Movies and Shows in September
                </div>
              </div>
            </div>
          </div>
        </div>
        <Menu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      </section>
    </>
  );
};

export default MovieDetails;
