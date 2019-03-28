

let queries = ['happy', 'excited', 'angry', 'suspense', 'sad', 'laughing', 'scared', 'alarmed', 'suprised', 'depressed', 'elated', 'confused', 'frustrated', 'annoyed', 'flustered',]


for (i = 0; i < queries.length; i++) {
    queryButton = $("<button>");
    queryButton.addClass('query-button');
    queryButton.attr("data-letter", queries[i]);
    queryButton.text(queries[i]);
    $("#button-container").append(queryButton);

}

// API KEY TzGZCgR5pjsTx9K7Re8DiK3EInjsmd9d