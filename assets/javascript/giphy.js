$(document).ready(function () {
    //Create an array of 90's sitcom shows
    var topics = ['Friends',
        'Full House',
        'Seinfeld',
        'Fresh Prince of Bel-Air',
        'Family Matters',
        'Martin',
        'Saved by the Bell',
        'Boy Meets World',
        'The Cosby Show',
        'A Different World'
    ];
    //Buttons for Array of Sitcoms
    function executeButtons() {

        $('#buttonsLocation').empty();
        //Loop for array of shows//
        for (var i = 0; i < topics.length; i++) {

            var newButtons = $("<button class='sitcomButtons'>");
            newButtons.addClass('sitcom');
            newButtons.attr('value', topics[i]);
            newButtons.text(topics[i]);
            $('#buttonsLocation').append(newButtons);
        };
    };
    //Button for new sitcom show   
    $('#addSitcom').on('click', function (event) {
        event.preventDefault();
        //Grabs new sitcom show from textbox       
        var show = $('#sitcomName').val().trim();
        //Adds movie from textbox to the array       
        topics.push(show);
        executeButtons();
        
    });


    $(document).on("click", ".gifImage", function() {
       
        var state = $(this).attr('data-state');
        if (state === 'still') {
            $(this).attr('src', $(this).attr('data-animate'));
            $(this).attr('data-state', 'animate');
        } else {
            $(this).attr('src', $(this).attr('data-still'));
            $(this).attr('data-state', 'still');
        };
      });




    //AJAX call for specific sitcom button being clicked
    $(document).on('click', '.sitcom', function (event) {
        var x = $(this).attr('value');
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=1bzhSvlOjiCjsDPWw79xG4COHKkd1vhK&limit=10&rating=g";
        console.log(queryURL);
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            displayGifs(response, x);


            //Gif display//                 
            function displayGifs() {
                $("#gifs-appear-here").empty();
                //for Loop for gifs
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
                    var p = $('<p>').text('Rating:' + response.data[i].rating);
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

})




















