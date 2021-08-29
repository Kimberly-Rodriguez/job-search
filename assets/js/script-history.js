var getLocal = localStorage.getItem("searchHistory");

var splitLocal = getLocal.split(",");

console.log(splitLocal[0]);

$(".results").attr("href", splitLocal[0]);

function displayHistory() {
    for (var i = 0; i < splitLocal.length; i++) {
        var parsedSearch = splitLocal[i].split("category=");
        console.log(parsedSearch);
        parsedSearch = parsedSearch[1];
        parsedSearch = parsedSearch.split("&location=");

        var catParsed = parsedSearch[0];
        var locParsed = parsedSearch[1];

        var storedCat = catParsed.replace("%20", " ");
        var storedLoc = locParsed.replace(/%20/g, " ");

        console.log(storedCat);
        console.log(storedLoc);

        $(".his"+[i]).html("<a href='"+splitLocal[i]+"'>" +storedCat +"</br>"+storedLoc+"</a>");

    };

};


displayHistory();
/*
var getLocal =  localStorage.getItem('history');

getLocal.split(",");

for (i=0; i<6; i++)


*/