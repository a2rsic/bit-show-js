import * as data from "./data.js"
import * as ui from "./ui.js";

const $input = $(".searchInput");
const $searchButton = $(".searchButton");

const init = () => {
    console.log("ready");

    data.getData(function (showList) {
        ui.displayMovies(showList);
    })

    setupEventListeners()

}

const initSingle = () => {

    const showId = data.getShowId()
    data.getSingleData(showId, (myShow) => {
        console.log(myShow);
        ui.displaySinglePage(myShow);
    })
    setupEventListeners()
}

const setupEventListeners = () => {

    $input.on("input", function () {
        data.getSearchData(ui.inputText(), function (myShowList) {
            ui.displaySearchList(myShowList);
        })
    })

    $(document).on("click", "li", function (event) {
        console.log(event);
        const showId = event.target.dataset.id
        console.log(showId);
        data.saveShowId(showId)

        window.location = "showInfoPage.html";
    })
}



export {
    init, initSingle
}