const wordMessage = document.getElementById("word-message");
const flipCard = document.getElementById("flip-card-message");

const pikaText = document.getElementById("pikaText");

const bgAudio = document.getElementById('bg-music');

wordMessage.addEventListener('animationend', () => {
  // flipCard.style.visibility="visible";
  setTimeout(() => {
    flipCard.classList.add('visible');
  }, 2000);  // 2000 milliseconds = 2 seconds
});

const yesDictionary = { 
  image:[
    // "https://i.giphy.com/Yz2NW6XR6EvmU4uWpa.webp",
    "https://media1.giphy.com/media/Yz2NW6XR6EvmU4uWpa/giphy.webp",
    "https://media1.giphy.com/media/T86i6yDyOYz7J6dPhf/giphy.webp",
    "https://media4.giphy.com/media/eHWUyxudOQGCulzFFR/giphy.webp",
    "https://media0.giphy.com/media/W6o3MfP1ldc0K8sb38/giphy.webp",
    "https://media2.giphy.com/media/SvvfK2dco188Wk4ZTq/giphy.webp",
    "https://media2.giphy.com/media/ZCSPaG9pPpSJEBiOUF/giphy.webp",
    "https://media2.giphy.com/media/QvvFkKfqwq82NniaIW/giphy.webp",
    "https://media4.giphy.com/media/lPM06f2zvk94jBAzlP/giphy.webp",
    "https://media3.giphy.com/media/eltZvfFAW9f9HI1foH/giphy.webp",
    "https://media1.giphy.com/media/cLS1cfxvGOPVpf9g3y/giphy.webp",
    "https://media4.giphy.com/media/m9XLXeXcVxlZX0Mfps/giphy.webp",
    "https://media1.giphy.com/media/js0lEnHUd26FSJ2lyu/giphy.webp",
    "https://media1.giphy.com/media/W3fbjOoLVKHGYHlJ4z/giphy.webp"
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
  var screenHeight = window.innerHeight;
  var screenWidth = window.innerWidth;

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
  snow.style.color = '#ff0000';  // Heart color
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

  // Remove the snowflake after the animation ends
  snow.addEventListener('animationend', function() {
      snow.remove();  // Remove snowflake after animation ends
  });
}

// Call createSnowflake every 500ms to generate new snowflakes
setInterval(createSnowflake, 500);

//back to index.html on browser refresh
window.addEventListener("load", function () {
  if (sessionStorage.getItem("reloaded")) {
      sessionStorage.removeItem("reloaded");
      window.location.href = "index.html";
  } else {
      sessionStorage.setItem("reloaded", "true");
  }
});