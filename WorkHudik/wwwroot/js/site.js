function search() {
    var id = 0;
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://jobsearch.api.jobtechdev.se/search?position=61.7,17.10&position.radius=20&limit=100",
        "method": "GET",
        "headers": {
            "accept": "application/json",
            "api-key": //your API-key here!!//
        }
    }
$.ajax(settings).done(function (response) {
    console.log(response); 

    $.each(response.hits, function() {
        $("<div class='annons_headline' id='annons_headline_" + id +
            "' onclick='clickHandler(" + id + ")'>" +
            response.hits[id].headline + "</div><br>").appendTo("body");

        $("<div class='annons_text' id='annons_text_" + id + "'>" +
            "<span style='color:lightgreen'>" + response.hits[id].workplace_address.municipality + "</span>" +
            "<br> <br>" + response.hits[id].description.text +
            "<br><br>" + "Deadline:   <span style='color:red'>" + response.hits[id].application_deadline + "</span>" +
            "<hr></div>").appendTo("body").hide();
        id++;
    });
});
}

function clickHandler(id) {
    $('#annons_text_' + id + '').toggle();
}