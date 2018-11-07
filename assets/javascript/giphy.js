$(document).ready(function () {

    var topics = ['Friends',
        'Full House',
        'Seinfeld',
        'Fresh Prince of Bel-Air',
        'Family Matters',
        'Martin',
        'Saved by the Bell',
        'Will & Grace',
        'The Cosby Show',
        'A Different World'
    ];
    //Buttons for Array of Sitcoms//
    function executeButtons() {

        $('#buttonsLocation').empty();

        for (var i = 0; i < topics.length; i++) {

            var newButtons = $("<button class='sitcomButtons'>");
            newButtons.addClass('sitcom');
            newButtons.attr('value', topics[i]);
            newButtons.text(topics[i]);
            $('#buttonsLocation').append(newButtons);
        };
    };
    $('#addSitcom').on('click', function (event) {
        event.preventDefault();
        var show = $('#sitcomName').val().trim();
        topics.push(show);
        executeButtons();
    });



    $(document).on('click', '.sitcom', function (event) {
        var x = $(this).attr('value');
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=1bzhSvlOjiCjsDPWw79xG4COHKkd1vhK&limit=10&rating=g";
        console.log(queryURL);
        //ajax call//
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            displayGifs(response, x);


            //Gif display//       
            function displayGifs() {
                $("#gifs-appear-here").empty();

                for (i = 0; i < response.data.length; i++) {

                    var rating = response.data[i].rating;
                    var imageAnimate = response.data[i].images.fixed_height.url;
                    var imageStill = response.data[i].images.fixed_height_still.url;


                    var sitcomImage = $("<img src='" + imageStill + "'>");
                    sitcomImage.attr('alt', x);
                    sitcomImage.attr('data-still', imageStill);
                    sitcomImage.attr('data-animate', imageAnimate);
                    sitcomImage.attr('data-state', 'still');
                    sitcomImage.attr('class', 'gifImage');
                    var p = $('<p>');
                    p.text('Rating:' + response.data[i].rating);
                    var sitcomDiv = $('<div>');
                    sitcomDiv.attr('id', 'sitcomImage' + (i + 1))
                    sitcomDiv.append(p);
                    sitcomDiv.append(sitcomImage);
                    $("#gifs-appear-here").append(sitcomDiv);
                }
            };
        })
    });

    executeButtons();


function checkState(){
    $('.gifImage').on('click', function(e) {
        var state = $(this).attr('data-state');
        if (state === 'still') {
            $(this).attr('src', $(this).attr('data-animate'));
            $(this).attr('data-state', 'animate');
        } else {
            $(this).attr('src', $(this).attr('data-still'));
            $(this).attr('data-state', 'still');

        };
    });
}
})




















