
const $input = $(".searchInput");
const $moviesContainer = $(".moviesContainer");

const inputText = () => $input.val();

const displayMovies = (movie1) => {

    for (let i = 0; i < movie1.length; i++) {
        const $p = $("<p>");
        const $img = $("<img>");
        const $text = $("<span>");

        const imgSrc = movie1[i].image;
        const imgId = movie1[i].id;
        $text.text(movie1[i].name);
        $img.attr("src", imgSrc);

        $img.attr("data-id", imgId);
        $p.append($img);
        $p.append($text);
        $moviesContainer.append($p);

    }
}


export {
    inputText,
    displayMovies
}