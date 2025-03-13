import React from 'react';
import HeroSlide from '../components/common/HeroSlide';
import tmdbConfigs from "../api/configs/tmdb.configs";
import { Box } from '@mui/material';
import uiConfigs from "../configs/ui.configs";
import Container from "../components/common/Container";
import MediaSlide from "../components/common/MediaSlide";
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import mediaApi from '../api/modules/media.api';
import RecommendSlide from "../components/common/RecommendSlide";

const HomePage = () => {
  const { listWatched } = useSelector((state) => state.user);
  const [recommendations, setRecommendations] = useState({
    movie: [],
    tv: []
  });


  useEffect(() => {
    const fetchRecommendations = async () => {
      if (listWatched.length === 0) return;
  
      // Ordenar pela data de criação (assumindo que a data está em 'createdAt')
      const lastMovies = listWatched
        .filter((item) => item.mediaType === 'movie')
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Ordena por data
        .slice(0, 5); // Pegando os últimos 5 filmes
  
      const lastTVShows = listWatched
        .filter((item) => item.mediaType === 'tv')
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Ordena por data
        .slice(0, 5); // Pegando os últimos 5 séries
  
      const movieIds = lastMovies.map((item) => item.mediaId);
      const tvIds = lastTVShows.map((item) => item.mediaId);
  
      const [movieResponse, tvResponse] = await Promise.all([
        movieIds.length ? mediaApi.getRecommendations({ mediaType: 'movie', ids: movieIds }) : { response: [] },
        tvIds.length ? mediaApi.getRecommendations({ mediaType: 'tv', ids: tvIds }) : { response: [] }
      ]);
  
      setRecommendations({
        movie: movieResponse.response || [],
        tv: tvResponse.response || []
      });
    };
  
    fetchRecommendations();
  }, [listWatched]);
  
  return (
    <>
      <HeroSlide mediaType={tmdbConfigs.mediaType.movie} mediaCategory={tmdbConfigs.mediaCategory.popular} />
      
      <Box marginTop="-4rem" sx={{ ...uiConfigs.style.mainContent }}>
        {recommendations.movie.length > 0 && (
            <Container header="Recomendações (Filmes)">
              <RecommendSlide medias={recommendations.movie} mediaType="movie" />
            </Container>
          )}

        {recommendations.tv.length > 0 && (
          <Container header="Recomendações (Séries)">
            <RecommendSlide medias={recommendations.tv} mediaType="tv" />
          </Container>
        )}

        <Container header="Populares">
          <MediaSlide mediaType={tmdbConfigs.mediaType.movie} mediaCategory={tmdbConfigs.mediaCategory.popular} />
        </Container>

        <Container header="Series Populares">
          <MediaSlide mediaType={tmdbConfigs.mediaType.tv} mediaCategory={tmdbConfigs.mediaCategory.popular} />
        </Container>

        <Container header="Filmes mais avaliados">
          <MediaSlide mediaType={tmdbConfigs.mediaType.movie} mediaCategory={tmdbConfigs.mediaCategory.top_rated} />
        </Container>

        <Container header="Series mais avaliadas">
          <MediaSlide mediaType={tmdbConfigs.mediaType.tv} mediaCategory={tmdbConfigs.mediaCategory.top_rated} />
        </Container>
      </Box>
    </>
  );
};

export default HomePage;