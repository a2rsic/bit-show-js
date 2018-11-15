

const $input = $(".searchInput");
const $moviesContainer = $(".moviesContainer");
const $header = $("header");
const $infoPageMain = $(".infoPageMain");

const inputText = () => {
    return $input.val()
};

const displayMovies = (showList) => {

    for (let i = 0; i < showList.length; i++) {
        const $p = $("<p>");
        const $img = $("<img>");
        const $text = $("<span>");

        const imgSrc = showList[i].image;
        const imgId = showList[i].id;
        $text.text(showList[i].name);
        $img.attr("src", imgSrc);

        $img.attr("data-id", imgId);
        $p.append($img);
        $p.append($text);
        $moviesContainer.append($p);

    }
}
const displaySearchList = (myShowList) => {

    const $ul = $("<ul>");

    $('ul').remove();
    for (let i = 0; i < myShowList.length && i < 5; i++) {

        const $li = $("<li>");
        const $link = $("<a>");

        const showName = myShowList[i].name;
        // const linkUrl = singleMovie[i].url;
        const listId = myShowList[i].id;

        $link.text(showName);
        // $link.attr("href", linkUrl);
        // $link.attr("data-id", linkId);

        $li.attr("data-id", listId);
        $li.text(showName);
        $li.addClass("list-group-item");
        $ul.append($li);
        $ul.addClass("ulClass list-group");


        $header.append($ul);
    }
}

const displaySinglePage = (singleShow) => {
    console.log(singleShow);
    const $img = $(`<img src="${singleShow.image}">`);
    // $img.attr("src", singleShow.image)

    $infoPageMain.append($img);
}


export {
    inputText,
    displayMovies,
    displaySearchList,
    displaySinglePage
}