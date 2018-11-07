$(document).ready(function () {

    var topics = ['#woohoo', '#lmao', '#whatever', '#wow', '#bored'];

    function buttons() {
        for (var i = 0; i < topics.length; i++) {
         var rxnButtons= $('#buttonsLocation').html();
         $("#buttonsLocation").html(rxnButtons + "<button>" + topics[i] + "</button>");
        }
      }
      
      buttons();





    // $('button').on('click', function () {
    //     var x = $(this).data('search');

    //     var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=1bzhSvlOjiCjsDPWw79xG4COHKkd1vhK&limit=10";
    //     console.log(queryURL);

    //     $.ajax({
    //         url: queryURL,
    //         method: "GET"
    //     }).then(function (response) {
    //         console.log(response);
    //         for (i = 0; i < response.data.length; i++);
    //         var reactionDiv = $('<div>');
    //         var p = $('<p>').text('Rating:' + response.data[i].rating);
    //         var reactionImage = $('<img>');
    //         reactionImage.attr('src', response.data[i].images.fixed_height.url);
    //         reactionDiv.append(p);
    //         reactionDiv.append(reactionImage);
    //         $("#gifs-appear-here").append(reactionDiv);




        });














