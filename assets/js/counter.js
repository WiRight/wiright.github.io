function counter() {
  var getNum = document.getElementById('qty').value, plus = document.getElementsByClassName('button_plus');
  getNum = parseInt(getNum);
  if (plus.onclick) {
    alert(123);
  }
}

function plus() {
  var getNum = document.getElementById('qty').value, result;
  getNum = parseInt(getNum);

  getNum++;

  document.getElementById('qty').innerHTML = getNum;
}
