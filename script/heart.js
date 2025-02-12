const heartWrapper = document.getElementById("heart-wrapper");
const heart = document.getElementById("heart");

const messageBubble = document.getElementById("message-bubble");
const myMessage = document.getElementById("my-message");

const messageForYou = document.getElementById("message-for-you");

const optionButtons = document.getElementById("yes-no-options");

const noButton = document.getElementById("noButton");

//Heart animation
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function showMessages() {
  showMessageBubble(false)
  await delay(2000); 
  myMessage.textContent = "Anh oi...";
  // messageBubble.classList.add("show");
  showMessageBubble(true);

  await delay(1000);
  messageForYou.classList.add("show");

  await delay(2000);
  optionButtons.classList.add("show");
}



//Bubble message
const messagesDictionary = { 
  inactiveMessage:[
    "Ahihi <3",
    "Click to wake me up!",
    "My valentine?",
    "Where's my chocolate?"
  ],
  noMessage:[ 
    "Ayeee... think again!",
    "Hay di qua!",
    "Don't try. You have no options!",
    "This button is just for fun. Don't try lol!"
  ],
  yesMessage:[ 
    "Gooood choice!",
    "I know it!",
    "Awwww...~.~"
  ]
};
function showMessageBubble(isShow) {
  if(isShow) {
    messageBubble.classList.add("show");
  } else {
    messageBubble.classList.remove("show");
  }
}

//Option buttons
function nextPage() {
  window.location.href = "yes.html";
}
function bubbleMessage(messages) {
  var randomIndex = Math.floor(Math.random() * messages.length);
  myMessage.textContent = messages[randomIndex];
}
function moveButton() {
  bubbleMessage(messagesDictionary.noMessage);

  var x = Math.random() * (window.innerWidth - noButton.offsetWidth*2) - 85;
  var y = Math.random() * (window.innerHeight - noButton.offsetHeight*2) - 48;
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
}

//HTML function execution
heart.addEventListener("click", () => {
  heart.classList.add("heart--active");
  heartWrapper.classList.add("heart__wrapper--active");
  showMessages();

});


