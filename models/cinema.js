const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.findTitlesOfFilms = function(){
  const results = this.films.map((film) => { return film.title })
  return results;
}

Cinema.prototype.findFilmByTitle = function(title){
  const foundFilm = this.films.find(function(film){
    return film.title === title;
  });
  return foundFilm;
}

Cinema.prototype.findFilmsByProperty = function(property, value){
  const foundFilms = this.films.filter(function(film){
    return film[property] === value;
  });
  return foundFilms;
}

Cinema.prototype.isThereAMovieThisYear = function(year){
  // const foundFilm = function(film){
  //   return film.year === year;
  // };
  return this.films.some(film => {return film.year === year;});
}

Cinema.prototype.areAllFilmsOverALength = function(length){
  const foundFilms = this.films.every(film => film.length > length);
  return foundFilms;
}

Cinema.prototype.sumAllRunningTimes = function(){
  const totalRunningTime = this.films.reduce((runningTotal, film) => {
    return runningTotal + film.length;
  }, 0);
  return totalRunningTime
}

module.exports = Cinema;
