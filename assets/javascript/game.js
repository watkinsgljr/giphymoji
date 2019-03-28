

//-----------------------GLOBAL VARIABLES-------------------------------------------------------------------------


let queries = ['happy', 'excited', 'angry', 'suspense', 'sad', 'laughing', 'scared', 'alarmed', 'suprised', 'depressed', 'elated', 'confused', 'frustrated', 'annoyed', 'flustered',]
let clickValue;
//-----------------------BUTTON GENERATION---------------------------------------------------------------------

for (i = 0; i < queries.length; i++) {
    queryButton = $("<button>");
    queryButton.addClass('query-button');
    queryButton.attr("data-letter", queries[i]);
    queryButton.text(queries[i]);
    $("#button-container").append(queryButton);


}
//------------------------BUTTON CLICK EVENTS-------------------------------------------------------------------

$('.query-button').click(function() {
    clickValue = $(this).text();
    var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=" + clickValue + "&api_key=TzGZCgR5pjsTx9K7Re8DiK3EInjsmd9d&limit=8");
    xhr.done(function(data) { console.log("success got data", data); });
});

















//------------------------------------------------------API KEY----------------------------------------------------------
// TzGZCgR5pjsTx9K7Re8DiK3EInjsmd9d