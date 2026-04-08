const resultEl = document.getElementById('result');

function sum(a, b) {
  return a + b;
}

resultEl.textContent = `2 + 3 = ${sum(2, 3)}`;
