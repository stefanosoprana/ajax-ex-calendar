$(document).ready(function(){


  var date = moment('01/2017', 'MM/YYYY')
  var daysInMonth = date.daysInMonth();
  console.log(daysInMonth);

  for (var i = 1; i <= daysInMonth; i++) {
    var liTemplate = $('.template li').clone();

    liTemplate.text(i + ' ' + date.format('MMMM'));

    $('.month ul').append(liTemplate);
  }

  
});
