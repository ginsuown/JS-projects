// execute recursive functions in their own call stack using setTimeout()

// var list = readHugeList();
// var nextListItem = function() {
//   var item = list.pop();
//   if (item) {
//     // process the list item...
//     nextListItem();
//   }
// };

var list = readHugeList();
var nextListItem = setTimeout(function(list) {
  var item = list.pop();
  if (item) {
    // process the list item...
    nextListItem(list);
  }
}, 0);

nextListItem();
