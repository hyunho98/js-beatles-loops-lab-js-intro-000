// add solution here
function theBeatlesPlay (musicians, instruments) {
  var array = new Array();

  for (var i = 0; i > musicians.length; i++) {
    array.push(musicians[i] + ' plays ' + instruments[i]);
  }

  return array;
}
