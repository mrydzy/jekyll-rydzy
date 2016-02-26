

$('document').ready(function(){
  var mapContainer = $('.map-container');
//var categories = ['website', 'webapp', 'mobile']
  var currentCategory;

  $('.map-row').on('click', '.map-col', function(e){
    var row = $(e.currentTarget).parent();
    var target = e.currentTarget.dataset.target;
    var category = e.currentTarget.dataset.category;
    if (category != undefined) {
      currentCategory = category;
    }
    var rowNumber = row.data('row');
    removeChildren(rowNumber);
    mapContainer.addClass('stage' + rowNumber + '-' + target + '-' + currentCategory);

    $.scrollTo($('#map-bottom'), 500, {offset: (-($(window).height()-100))});
  });

  var rowIdRegex = /\d+/;
  function removeChildren(rowNumber) {
    var classes = mapContainer[0].classList;
    var classesNumber = classes.length;
    for (var i = 0; i < classesNumber; i++) {
      var rowid = rowIdRegex.exec(classes[i]);
      if (rowid !== null) {
        if (rowid[0] >= rowNumber) {
          mapContainer.removeClass(classes[i]);
          classesNumber--;
          i--;
        }
      }
    }
  }
});
