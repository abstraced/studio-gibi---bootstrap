var Sequence = (function sequenceIIFE() {
  // Private variable to store current counter value.

  function importAndRenderAll() {
    var $listFilm = $('.ListofFilms');

    // get the list of object from the API
    $.ajax({
      url: 'https://ghibliapi.herokuapp.com/films',
      dataType: 'json'
    }) //js/films.json
      .then(function(responseJSON) {
        // for each object in the list create a li class and an eventListener
        $(responseJSON).each(function(i) {
          //  Create the bootstrap button  and the events
          var $newElement = $(
            '<li class=""  > <button type="button"  class=" btn-block btn   btn-dark  text-primary list-group-item" data-toggle="modal" data-target="#exampleModalCenter">' +
              responseJSON[i].title +
              '</button></li>'
          ).click(function() {
            $('.modal-title').text(responseJSON[i].title);
            $('.director').text('Director:  ' + responseJSON[i].director);
            $('.year').text('Year:  ' + responseJSON[i].release_date);
            $('.description').text(responseJSON[i].description);
          });

          // add the bootstrap elements to the list
          $($listFilm).append($newElement);
        });
      });
  }

  return {
    importAndRenderAll: importAndRenderAll
  };
})();
Sequence.importAndRenderAll();
