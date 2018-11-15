import Show from "../entities/show.js"

const saveShowId = (showId) => {
    localStorage.setItem("showId", showId);
}

const getShowId = () => {
    const showId = localStorage.getItem("showId");
    return showId
}

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
        const showList = [];
        for (let i = 0; i < moviesList50.length; i++) {

            const { id, name, image, summary } = moviesList50[i];

            if (image) {
                showList.push(new Show(id, name, image.medium, summary));
            }

        }

        onSuccess(showList)


    })
}

const getSearchData = (inputText, onSearchSuccess) => {
    const searchBase = "http://api.tvmaze.com/search/shows?q=" + inputText;

    const searchRequest = $.ajax({
        url: searchBase
    })

    searchRequest.done((searchResponse) => {
        // searchResponse --- responseShowsList

        const showList = [];
        for (let i = 0; i < searchResponse.length; i++) {
            const { name, id, image, summary } = searchResponse[i].show;

            if (image) {
                const show = new Show(id, name, image.medium, summary)
                showList.push(show)

            }

        }
        console.log(showList);
        onSearchSuccess(showList);
    })


}

const getSingleData = (showId, singlePageOnSuccess) => {
    const singleBase = "http://api.tvmaze.com/shows/" + showId;

    const singleRequest = $.ajax({
        url: singleBase
    })


    singleRequest.done((singleResponse) => {
        console.log(singleResponse.name);

        const { name, id, url, image, summary } = singleResponse;
        const myShow = new Show(id, name, image.medium, summary);

        singlePageOnSuccess(myShow);

    })
}






export {
    getData,
    getSearchData,
    getSingleData,
    saveShowId,
    getShowId
}