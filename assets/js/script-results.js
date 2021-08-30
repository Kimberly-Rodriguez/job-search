
var redirectedUrl = location.search;
var lastSearch = localStorage.getItem("lastSearch");

// sets the results navbar tab to redirect to the previous search
//THIS IS IMPORTANT- without it the search history breaks after going from results back to history
if (!lastSearch) {
    $(".results").attr("href", "#");
}
else {
    $(".results").attr("href", lastSearch);
};

console.log(redirectedUrl);

// we're taking location and category from the URL and inserting it into our API...
// AND then we are fetching that information from API
function museFetch() {

    var url = "https://www.themuse.com/api/public/jobs" + redirectedUrl + "&page=1&descending=true&api_key=23e5932b55bcb7c1c25fc9345f275bfa396c25cfa07e4a436777b253ac0a36c5";
    fetch(url, {
        method: 'get', //get is the default

    })
        .then(function (response) {
            return response.json();
        })

        .then(function (data) {
            console.log(data);
            // console.log(data.results[0].contents);

            for (let i = 0; i < 6; i++) {

                // console.log(data.results[i].company.name);
                $(`#data-0${i}`).html(`${data.results[i].company.name} </br></br>`);
                $(`#data-0${i}`).append(data.results[i].name);
                $(`#table-0${i}`).html(data.results[i].contents);
                $(`.link0${i}`).attr("href", data.results[i].refs.landing_page);

                //use str.length or text.length to simplify to first 100 words
                var text = $(`#table-0${i}`).text();
                if (text.length > 1000) {
                    $(`#table-0${i}`).text(text.substr(0, text.lastIndexOf(' ', 1000)) + '...');
                }

                learningObjects(data.results[i].name)
                console.log(data.results[i].name)

            }





        });
};

museFetch();

function init() {
    var currentHistory = location.href
    var storedHistory = localStorage.getItem("searchHistory");
    // if nothing is in local storage when function is called, just save url to local 
    if (!storedHistory) {

        localStorage.setItem("searchHistory", currentHistory);

        return;
    }

    // if localstorage has information, split local storage and concat so current url is in
    //position 0, and then save new array to local storage
    storedHistory.split(/,/g)

    //added a comma to divide each entry
    var searchHistory = currentHistory + ",".concat(storedHistory)

    localStorage.setItem("searchHistory", searchHistory);

};


function learningObjects(jobTitle){

fetch("https://learning-objects-v2.p.rapidapi.com/search?keywords=" + jobTitle + "&lang=en&type=video&sort=popularity&model=strict&max=10&page=0", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "learning-objects-v2.p.rapidapi.com",
        "x-rapidapi-key": "7d039f89c6msh0f2c2b6ab2ee542p15d141jsnb051331afdd5"
    }
})
    .then(response => {
        return response.json();
        // console.log(response.url);
        // learningURL(response);
    })

    .then(function (data) {
        console.log(data.response.content[0].url)
    })


    .catch(err => {
        console.error(err);
    });


    // $(learningObjectResults).text(response.url);


}
    init();


