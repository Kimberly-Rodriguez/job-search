
var redirectedUrl = location.search;
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

            for ( let i = 0; i < 6; i++) {
                
                // console.log(data.results[i].company.name);
                $(`#data-0${i}`).html(`${data.results[i].company.name} </br>`);
                $(`#data-0${i}`).append(data.results[i].name);
                $(`#table-0${i}`).html(data.results[i].contents);

                //use str.length or text.length to simplify to first 100 words
                    var text = $(`#table-0${i}`).text();
                    if (text.length > 1000) {
                        $(`#table-0${i}`).text(text.substr(0, text.lastIndexOf(' ', 1000)) + '...');
                    }
             }
        });
       

};

museFetch();

// for (each card)

//take the data that the API is giving us and displaying the information on the card/page

// for loop for the object array 

// when the user clicks on the jobs THEN we will run the next API that will take us to the skill extractor page

