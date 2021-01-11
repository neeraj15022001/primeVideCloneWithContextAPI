const endpoints = [
    {
      uri:
        "https://api.themoviedb.org/3/discover/tv?api_key=506fadb0256c13349acc05dabebf9604&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false",
      title: "Popular TV Shows",
    },
    {
      uri:
        "https://api.themoviedb.org/3/discover/movie?api_key=506fadb0256c13349acc05dabebf9604&sort_by=popularity.desc",
      title: "Popular Movies",
    },
    {
      uri:
        "https://api.themoviedb.org/3/discover/tv?api_key=506fadb0256c13349acc05dabebf9604&with_genres=10749",
      title: "High Rated Romance",
    },
    {
      uri:
        "https://api.themoviedb.org/3/discover/movie?api_key=506fadb0256c13349acc05dabebf9604&with_genres=18",
      title: "Drama Rich",
    },
    {
      uri:
        "https://api.themoviedb.org/3/discover/movie?api_key=506fadb0256c13349acc05dabebf9604&with_genres=878",
      title: "Sci-Fi",
    },
    {
      uri:
        "https://api.themoviedb.org/3/discover/movie?api_key=506fadb0256c13349acc05dabebf9604&with_genres=27",
      title: "Horror",
    },
    {
      uri:
        "https://api.themoviedb.org/3/discover/movie?api_key=506fadb0256c13349acc05dabebf9604&with_genres=35",
      title: "Comedy Bits",
    },
  ];
  export default endpoints;