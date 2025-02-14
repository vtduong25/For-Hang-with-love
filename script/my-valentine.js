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
    "Click me!",
    "My valentine?",
    "Where's my chocolate?",
    "1 + 1 = 2, You + Me = Couple?",
    "He he he >.<",
    "~.~",
    "Woahahaha",
    "Me gustas",
    "Mi piaci",
    "Wo xihuan ni",
    "Are you French? Because Eiffel for you.",
    "Are you a keyboard? Cause you’re my type.",
    "Are you a PT? Cause I am pleased to tease u.",
    "You are T, I am V, together we'll make a TV show :)",
    "Singles mingle",
    "V saw me idle for 6 hours to fix the bubble messages",
    "I am cool and you know that.",
    "Can you get me the address to your <3 key?",
    "Troooooy oyyy!",
    "Sad life, V said hehe...",
    "Always with you",
    "This is how an engineer confesses..",
    "The one and only V you know hehehe",
    "The almighty silly is me :)", 
    "....",
    "I can read your mind bahaha...",
    "Hope you like it",
    "I believe I can fly...",
    "I believe I can touch the sky...",
    "I don't bite >.<",
    "We are all in this together.",
    "What are you waiting for?",
    "Are you ready for it?"
  ],
  noMessage:[ 
    "Ayeee... think again!",
    "Don't try. You have no options!",
    "This button is just 4 fun. FYI",
    "I know you well enough lol.",
    "Loool",
    "Lmao",
    "Again?",
    "Maybe next time?",
    "Can't say yes, can't click no either :P",
    "Ayeee, anh oi, how dare you?",
    "Heart beats left, click the left button :)",
    "Hah, don't you dare?",
    "I know you would choose it",
    "Your fortune cookie says 'good luck'",
    "I know what you are trying lol.",
    "I can sense it, anh",
    "Button for display only.",
    "Catch me if you can...",
    "Destiny doesn't support you today.",
    "Be careful, it's a tick bomb.",
    "Don't worry, you can't run away..",
    "I have a dictionary of messages, take your time.",
    "Ayeeeeee, anh ooooooi!",
    "Ri oi, anh hay di qua'",
    "Ayeee, are you sure? Think again!",
    "I know lol!",
    "To the left...",
    "I’m already one step ahead.",
    "Oooo, someone’s running away...",
    "Try it :P",
    "Haha, nice try! Try again!",
    "I bet you didn’t expect this, lol?",
    "Guess you didn't know that lol"
  ],
  yesMessage:[ 
    "Gooood choice!",
    "I know it!",
    "Awwww...~.~",
    "Sun sets on the east today?",
    "Wisconsin with no snow today?",
    "LOL?",
    "Lol, finally!",
    "Surpriseee!!!",
    "Hehehe",
    "<3",
    "Unbelievable >.<",
    "Yooo yooo yoo...",
    "It's candy time.",
    "Your only option, you know.",
    "Follow your heart.",
    "Hah, promise I won't bite.",
    "Bananaaar!",
    "Valentinooo",
    "Let's listen to 'Die with a happy smile'. ",
    "Hehe the one and only.",
    "Your favorite person on Earth \'o'/",
    "Awww, you're too sweet .",
    "Did the world just spin backward?",
    "<3 You're too cute!",
    "Haha, you know it's your only choice, right?",
    "I promise, I’m harmless... maybe?",
    "Guess I’ll just vibe with a happy smile!",
    "We don't talk about Bruno-no-no-no ....",
    "Lol Mars is falling down, I am sure.",
    "My first Valentine hehehe"
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
  window.location.href = "for-you.html";
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


