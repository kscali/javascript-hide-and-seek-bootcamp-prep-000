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
  for (let i = 0; i < n; i++) {
       return  parseInt(increase[i + n]);
      }
}

function deepestChild() {
  var deepChild = document.querySelector('#grand-node').querySelectorAll('div');
  let innerChild = [];
    for (i = 0; i < deepChild.length; i++ ) {
      innerChild.push(deepChild[i]);
      if (i === deepChild.length - 1) {
        return deepChild[i];
      }
    }
}