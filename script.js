const randomEl = document.getElementById('random');
const randomBtn = document.getElementById('randomBtn');

randomBtn.addEventListener('click', generateRandomFact);

generateRandomFact();

async function generateRandomFact() {
  const res = await fetch('https://uselessfacts.jsph.pl/random.json?language=en');
  const data = await res.json();
  randomEl.innerHTML = data.text;
}