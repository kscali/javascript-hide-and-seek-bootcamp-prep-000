function getFirstSelector(selector) {
  var first = document.querySelector(selector);
  return first;
}

function nestedTarget() {
  var nested = document.getElementById('nested').querySelector('.target');
  return nested;
}

function increaseRankBy(n) {
  var increase = document.querySelectorAll('.ranked-list');
  start = 1;
  for (var i = 0, start = increase.length; i < 1; i++) {
    let children = increase[i].children;
     
    for (var j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j] + n)
    }
  }
  
}

function deepestChild() {
  var deepChild = document.querySelector('#grand-node').querySelectorAll('div');
  let innerChild = [];
    for (var i = 0; i < deepChild.length; i++ ) {
      innerChild.push(deepChild[i]);
      if (i === deepChild.length - 1) {
        return deepChild[i];
      }
    }
}