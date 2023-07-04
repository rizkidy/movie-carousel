const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNTM5MmFkNGIzODJiMDc0YTY0MDg0ZjYzYTdiZmJjMiIsInN1YiI6IjY0NjUyYzVkZjQ4YjM0MDE3MjE2MTUxYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ID_Wtdsyt-9eP3H2xLGmtwq6IjzxcbRVS3it48h4n9Y'
    }
};

fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
    .then(response => response.json())
    .then(response => {
        const randomIndex = Math.floor(Math.random() * response.results.length);

        const movieTitle = response.results[randomIndex].title;
        document.querySelector(".title-info h1").textContent = movieTitle;
        

        const movieOverview = response.results[randomIndex].overview;
        document.querySelector(".title-info-synopsis").textContent = movieOverview;

        const maturityNumber = response.results[randomIndex].adult ? "18+" : "16+";
        document.querySelector(".maturity-number").textContent = maturityNumber;

        const voteAverage = response.results[randomIndex].vote_average;
        document.querySelector(".vote-average").textContent = voteAverage;

        const language = response.results[randomIndex].original_language;
        document.querySelector(".language").textContent = language;

        const releaseYear = response.results[randomIndex].release_date;
        document.querySelector(".movie-year").textContent = releaseYear;

        const movieBackdrop = response.results[randomIndex].backdrop_path;
        const backdropUrl = "https://image.tmdb.org/t/p/original" + movieBackdrop;

        document.querySelector(".bg-img").style.backgroundImage = `url(${backdropUrl})`;

        const imageContainer = document.getElementById("imgContainer");
        const carousel = document.createElement("div");
        carousel.classList = "carousel";

        const shuffleResults = response.results.sort(() => 0.5 - Math.random());
        shuffleResults.slice().forEach(movie => {
            const img = document.createElement("img");
            img.src = "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;        
            img.alt = "Movie Poster";
            img.style.objectFit = "cover";
            img.width = 300;
            img.height = 170;
            img.style.borderRadius = "8px";
            carousel.appendChild(img);
        });

        imageContainer.innerHTML = '';
        imageContainer.appendChild(carousel);

    })
    .catch(err => console.error(err));