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
  
     
     
      children[j].innerHTML = parseInt(children[j].innerHTML) + n;
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