function getFirstSelector(selector) {
  var first = document.querySelector(selector);
  return first;
}

function nestedTarget() {
  var nested = document.getElementById('nested').querySelector('.target');
  return nested;
}

function increaseRankBy(n) {
  var increase = document.querySelector('.ranked-list');
  const firstList = rankedLists[0];
  const secondList = rankedLists[1];
  let children = firstList.children;
  let start = 1;
      
  for (let i = 0, l = children.length; i < l; i++) {
     return parseInt(children[i].innerHTML);
  }

      children = secondList.children;
      start = 12;

      for (let i = 0, l = children.length; i < l; i++) {
        return parseInt(children[i].innerHTML);
      }
}