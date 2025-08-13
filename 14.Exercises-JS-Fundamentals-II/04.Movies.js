// 4. Movies

// Write a function that stores information about movies inside an array. 
// The movie's object info must be name, director, and date. You can receive several types of input:

// · "addMovie {movie name}" – add the movie

// · "{movie name} directedBy {director}" – check if the movie exists and then add the director

// · "{movie name} onDate {date}" – check if the movie exists and then add the date

// At the end print all the movies that have all the info (if the movie has no director, name, or date, don’t print it) in JSON format.
// [

// 'addMovie Fast and Furious',

// 'addMovie Godfather',

// 'Inception directedBy Christopher Nolan',

// 'Godfather directedBy Francis Ford

// Coppola',

// 'Godfather onDate 29.07.2018',

// 'Fast and Furious onDate 30.07.2018',

// 'Batman onDate 01.08.2018',

// 'Fast and Furious directedBy Rob Cohen'

// ]
// {"name":"Fast and Furious","date":"30.07.2018","director":"Rob Cohen"} {"name":"Godfather","director":"Francis Ford Coppola","date":"29.07.2018"}

function moviesJson(array) {
    let movies = [];

    for (let line of array) {
        line = line.trim();

        if (line.startsWith('addMovie')) {
            let movieName = line.replace('addMovie', '').trim();
            movies.push({ name: movieName });
        } 
        else if (line.includes('directedBy')) {
            let [movieName, director] = line.split('directedBy').map(s => s.trim());
            let movie = movies.find(m => m.name === movieName);
            if (movie) movie.director = director;
        } 
        else if (line.includes('onDate')) {
            let [movieName, date] = line.split('onDate').map(s => s.trim());
            let movie = movies.find(m => m.name === movieName);
            if (movie) movie.date = date;
        }
    }

    for (const movie of movies) {
        if (movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    }
}

moviesJson(['addMovie Fast and Furious',

'addMovie Godfather',

'Inception directedBy Christopher Nolan',

'Godfather directedBy Francis Ford Coppola',

'Godfather onDate 29.07.2018',

'Fast and Furious onDate 30.07.2018',

'Batman onDate 01.08.2018',

'Fast and Furious directedBy Rob Cohen'

])