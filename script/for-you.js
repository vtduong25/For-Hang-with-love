const wordMessage = document.getElementById("word-message");
const flipCard = document.getElementById("flip-card-message");

const pikaText = document.getElementById("pikaText");

const bgAudio = document.getElementById('bg-music');

// First we check if you support touch, otherwise it's click:
let touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';

flipCard.addEventListener(touchEvent, function () {
  randomAnimatedMeme(yesDictionary.image);
  flipCard.classList.toggle("flipped");
});

wordMessage.addEventListener('animationend', () => {
  setTimeout(() => {
    flipCard.classList.add('visible');
  }, 2000);  // 2000 milliseconds = 2 seconds
});

const yesDictionary = { 
  image:[
    "https://media0.giphy.com/media/6NCKCvwfEINL8POnbF/giphy.webp",
    "https://media4.giphy.com/media/UnF62I2Zn8X8mGEehC/giphy.webp",
    "https://media0.giphy.com/media/FPsI4PHht33EjDPtoV/giphy.webp",
    "https://media0.giphy.com/media/cnd75q7g4oSEmeEHKU/giphy.webp",
    "https://media3.giphy.com/media/l0bSHkRkIYB8zcwBF8/giphy.webp",
    "https://media4.giphy.com/media/gtSQbjYqoDbsA2j0jg/giphy.webp",
    "https://media0.giphy.com/media/qqBP8Xvn2vtklP06pI/giphy.webp",
    "https://media3.giphy.com/media/p34MlXlU4jx7fvWTmT/200.webp",
    "https://media3.giphy.com/media/a7YBatpbXSzxbrSkvM/giphy.webp",
    "https://media0.giphy.com/media/sXPHBN29M86UwTCAh7/giphy.webp",
    "https://media2.giphy.com/media/AQmRoVFBa1DDQeXprE/giphy.webp",
    "https://media0.giphy.com/media/KrqmzLuynW3zsbpXGt/giphy.webp",
    "https://media3.giphy.com/media/V460n6dwvVHrpJQPF9/giphy.webp",
    "https://media4.giphy.com/media/9Mv6b3qFrjimE5A2EP/giphy.webp",
    "https://media4.giphy.com/media/3chqOFSQ58aSVTiZzi/giphy.webp"
  ]
};

let lastIndex = -1; // Stores the last used index
function randomAnimatedMeme(messages) {
  do {
    var randomIndex = Math.floor(Math.random() * messages.length);
  } while (randomIndex === lastIndex); // Repeat if it's the same as last time

  lastIndex = randomIndex; // Update last index
  pikaText.src = messages[randomIndex];
}

//heart rain
// Function to generate random numbers within a range
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Function to create snowflake elements
function createSnowflake() {
  // Get the window size (screenHeight and screenWidth)
  var screenHeight = window.innerHeight- 150;
  var screenWidth = window.innerWidth - 150;

  // Random start position
  var startLeft = getRandomArbitrary(0, screenWidth);

  // Random animation duration
  var timeRun = getRandomArbitrary(4000, 6000);

  // Random opacity between 0.2 and 1
  var opacityR = Math.random() * (1 - 0.2) + 0.2;

  // Random snowflake size between 5px and 20px
  var sizeR = getRandomArbitrary(5, 20);

  // Random end position for left (between startLeft - 100 and startLeft + 100)
  var endLeft = getRandomArbitrary(startLeft - 100, startLeft + 100);

  // Create snowflake element
  var snow = document.createElement('span');

  // Style the snowflake with random properties
  snow.classList.add('snow-item', 'fa', 'fa-heart');
  snow.style.position = 'absolute';
  snow.style.color = '#79AC78';  // Heart color
  snow.style.display = 'block';
  snow.style.top = '0px';
  snow.style.left = startLeft + 'px';
  snow.style.opacity = opacityR;
  snow.style.fontSize = sizeR + 'px';
  //snow.innerHTML = '❤️';  // Heart symbol for snowflake 

  // Append snowflake to the body
  document.body.appendChild(snow);

  // Animate the snowflake falling using the native JavaScript animate() method
  snow.animate([
      {
          top: '0px',  // Start at the top of the screen
          left: startLeft + 'px',
          opacity: opacityR,
      },
      {
          top: screenHeight - sizeR + 'px',  // Animate to the bottom of the screen
          left: endLeft + 'px',  // Animate to a random horizontal position
          opacity: 0,  // Fade out at the bottom
      }
  ], {
      duration: timeRun,  // Set the duration for the fall
      easing: 'linear',  // Make the animation linear
      fill: 'forwards',  // Keep the final state after animation ends
  });
  setTimeout(() => snow.remove(), timeRun);
  
}


// Call createSnowflake every 500ms to generate new snowflakes
setInterval(createSnowflake, 500);

// //back to index.html on browser refresh
window.addEventListener("load", function () {
  if (sessionStorage.getItem("reloaded")) {
      sessionStorage.removeItem("reloaded");
      window.location.href = "index.html";
  } else {
      sessionStorage.setItem("reloaded", "true");
  }
});