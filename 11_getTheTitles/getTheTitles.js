const getTheTitles = function(books) {
    // let titles = [];
    // for (let i = 0; i < books.length; i++) {
    //     book = books[i];
    //     titles.push(book["title"]);
    // }
    // return titles;
    return books.map((book) => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
