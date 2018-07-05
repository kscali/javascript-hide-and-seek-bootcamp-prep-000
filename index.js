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