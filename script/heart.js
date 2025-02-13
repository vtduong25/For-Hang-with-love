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
    "Are you a keyboard? Because you’re my type.",
    "Are you a PT? Cause I fall to see you",
    "You are T, I am V, together we make a perfect TV show :)",
    "Singles mingle",
    "V saw me idle for 6 hours to fix the bubble messages",
    "I am cool and you know that.",
    "Can you get me the address to your heart key?",
    "Troooooooooooooooy oyyy!",
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
    "I don't bite",
    "We are all in this together",
    "What are you waiting for?",
    "Are you ready for it?"
  ],
  noMessage:[ 
    "Ayeee... think again!",
    "Don't try. You have no options!",
    "This button is just for fun. Don't try lol!",
    "I can predict the answer. Know you well enough.",
    "Again?",
    "Maybe next time?",
    "Can't make you say yes, but can't let you click no either.",
    "Ayeee, anh oi, how dare you?",
    "Heart is on the left, might as well click the left button :)",
    "Hah, don't you dare to click it?",
    "I know you would choose it",
    "Your fortune cookie say good luck",
    "I know what you are trying to do.",
    "I can sense what you are doing, anh",
    "Button for display only.",
    "Catch me if you can..",
    "Wohahah destiny doesn't allow that to be click.",
    "Be careful, it's a tick bomb.",
    "Don't worry, I won't let you run away from this?",
    "I have a thousand more messages to say, take your time.",
    "Ayeeeeee, anh ooooooi!",
    "Ri oi, anh hay di qua'",
    "Ayeee, are you sure about that? Think again!",
    "You can't fool me, I already know what you're gonna do!",
    "I see you eyeing that button, but trust me, it's not worth it!",
    "Don’t even think about it, I’m already one step ahead.",
    "Oooo, someone’s running away...",
    "Try it :P",
    "Haha, nice try! Try again!",
    "I bet you didn’t expect this, lol?",
    "Guess you didn't expect that lol"
  ],
  yesMessage:[ 
    "Gooood choice!",
    "I know it!",
    "Awwww...~.~",
    "Sun sets at the wrond direction today?",
    "Surprise it is sunny outside",
    "How many times have you clicked no already?",
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
    "Banana!",
    "Valentinooo",
    "I will listen to 'Die with a happy smile'. ",
    "Hehe the one and only.",
    "Your favorite person on Earth \'o'/",
    "Awww, you're too sweet .",
    "Did the world just spin the other way around?",
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


