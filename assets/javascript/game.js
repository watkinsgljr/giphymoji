

//-----------------------------------------------GLOBAL VARIABLES----------------------------------------------------------


let queries = ['happy', 'excited', 'angry', 'suspense', 'sad', 'laughing', 'scared', 'alarmed', 'suprised', 'depressed', 'elated', 'confused', 
'frustrated', 'annoyed', 'flustered',]



//-----------------------------------------------BUTTON GENERATION---------------------------------------------------------

$(document).ready(function () {
    generateButtons();
    console.log('ready');

//----------------------------------------------BUTTON CLICK EVENTS--------------------------------------------------------

    $(document).on("click", ".query-button", function() {
        var emotion = $(this).text();
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + emotion + "&api_key=TzGZCgR5pjsTx9K7Re8DiK3EInjsmd9d&limit=9"

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            for (i = 0; i < response.data.length; i++) {
                fixedHeightImageUrl = response.data[i].images.fixed_height.url;
                fixedHeightStillUrl = response.data[i].images.fixed_height_still.url;
                gifDiv = $('<img>').attr('src', fixedHeightStillUrl).attr('data-state', 'still')
                .attr('data-animate', fixedHeightImageUrl).attr('data-still', fixedHeightStillUrl).addClass('gif');
                $("#gif-grid-container").prepend(gifDiv);
            }
        });
    });

    //--------------------------------------GIF CLICK EVENT---------------------------------------------------------------

    $(document).on("click", ".gif", function () {
        var state = $(this).attr("data-state");
        if (state === "still") {
          $(this).attr("src", $(this).attr("data-animate"));
          $(this).attr("data-state", "animate");
        } else {
          $(this).attr("src", $(this).attr("data-still"));
          $(this).attr("data-state", "still");
        }
      });



    // -------------------------------------ADD AN EMOTION BUTTON CLICK EVENT--------------------------------------------

    $(document).on("click", "#add-emotion", function (event) {
        $("#button-container").empty();    
        let newEmotion = $('#emotion-input').val();
        queries.push(newEmotion);
        console.log(queries);
        $("#emotion-input").val("");
        generateButtons();
        event.preventDefault();
    });

    
});

//-----------------------------------------------GENERATE BUTTON FUNCTION---------------------------------------------------

function generateButtons() {
    for (i = 0; i < queries.length; i++) {
        queryButton = $("<button>");
        queryButton.addClass('query-button');
        queryButton.attr("data-letter", queries[i]);
        queryButton.text(queries[i]);
        $("#button-container").append(queryButton);
        console.log(queryButton);
    }
} 





