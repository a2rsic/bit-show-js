import Movie from "../entities/movie.js"

const getData = (onSuccess) => {
    const showBase = "http://api.tvmaze.com/shows";
    // const singleShow = "http://api.tvmaze.com/search/shows?q=" + inputText;
    const request = $.ajax({
        url: showBase
    })


    request.done((response) => {
        response.sort((current, next) =>
            next.rating.average - current.rating.average
        );
        const moviesList50 = response.slice(0, 50);

        // console.log(moviesList50);
        let movie1 = [];
        for (let i = 0; i < moviesList50.length; i++) {

            const { id, name, image, summary } = moviesList50[i];
            movie1.push(new Movie(id, name, image.original, summary));

        }
        // console.log(movie1);

        onSuccess(movie1)


    })
}

const getSearchData = (inputText, onSearchSuccess) => {
    const searchBase = `http://api.tvmaze.com/search/shows?q=${inputText}`;

    const searchRequest = $.ajax({
        url: searchBase
    })

    searchRequest.done((searchResponse) => {
        console.log(searchResponse)

    })
}




export {
    getData,
    getSearchData

}