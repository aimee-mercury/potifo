
let currentResult = '';

function appendToResult(value) {
  currentResult += value;
  document.getElementById('aimee').value = currentResult;
}

function calculate() {
  try {
    currentResult = eval(currentResult);
    document.getElementById('aimee').value = currentResult;
  } catch (error) {
    document.getElementById('aimee').value = 'Error';
  }
}

function clearResult() {
  currentResult = '';
  document.getElementById('aimee').value = '0';
}



