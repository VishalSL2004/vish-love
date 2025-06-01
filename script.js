const quotes = [
  "You are my today and all of my tomorrows. 💖",
  "In your smile, I see something more beautiful than stars.",
  "I didn’t choose you, my heart did.",
  "You are the one I want to hold on to forever. 💘",
  "Every love story is beautiful, but ours is my favorite.",
  "If I had a flower for every time I thought of you, I could walk through my garden forever. 🌸",
  "My heart is, and always will be, yours. ❤️",
  "You complete me in ways I never knew I needed.",
  "Your love is my favorite place to be.",
  "You make my soul smile. 💞"
];

let currentQuoteIndex = 0;
let userName = '';

function startGame() {
  const name = document.getElementById('nameInput').value.trim();
  if (!name) {
    alert("Please enter your name!");
    return;
  }
   document.getElementById('bgMusic').play();
  userName = name;
  document.getElementById('inputSection').style.display = 'none';
  document.getElementById('quoteSection').style.display = 'block';
  document.getElementById('greetingText').innerText = `For you, ${userName} ❤️`;
  showNextQuote();
}

function showNextQuote() {
  if (currentQuoteIndex < quotes.length) {
    document.getElementById('quoteDisplay').innerText = quotes[currentQuoteIndex];
    currentQuoteIndex++;
  } else {
    showFinalMessage();
  }
}

function showFinalMessage() {
  document.getElementById('greetingText').innerText = `🎉 Happy Birthday, ${userName}! 🎂`;
  document.getElementById('quoteDisplay').innerHTML = `
    <div class="final-msg">
      <p>May your day be filled with love, laughter, and endless joy. 💫</p>
      <p>Thank you for being the most beautiful part of my life. 💖</p>
      <h3>I love you! 💝</h3>
      <h4>Oi Bubbly! Enakku eppo OK solluva😍</h4>
    </div>
  `;
}

function restart() {
  currentQuoteIndex = 0;
  document.getElementById('inputSection').style.display = 'block';
  document.getElementById('quoteSection').style.display = 'none';
  document.getElementById('nameInput').value = "";
}