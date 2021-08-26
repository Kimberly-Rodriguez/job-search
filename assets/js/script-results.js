




function museFetch() {
    prepareInput()
    console.log(prepLoc);
    var url = "https://www.themuse.com/api/public/jobs?category=" + userInput + "&location=" + prepLoc + "&page=1&descending=true";
    fetch(url, {
        method: 'get', //get is the default

    })
        .then(function (response) {
            return response.json();
        })
    
        .then(function (data) {
            $("footer").html(data.results[0].contents);
            console.log(data);
        });
};

museFetch();