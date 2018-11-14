import * as data from "./data.js"
import * as ui from "./ui.js";
import Movie from "../entities/movie.js";



const $input = $(".searchInput");
const $searchButton = $(".searchButton");
const init = () => {
    console.log("ready");

    data.getData(function (movie1) {
        ui.displayMovies(movie1);
    })

    $searchButton.on("click", function () {
        data.getSearchData($input.val(), function () {
            ui.displayMovies();
        })
    })
}



export {
    init
}