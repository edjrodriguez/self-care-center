//querySelectors that already work
var affirmation = document.querySelector('.affirmation');
var mantra = document.querySelector('.mantra');
var receiveMessage = document.querySelector('button');
var message = document.querySelector('p');
var meditationImage = document.querySelector('.image');
var generatedMessage = document.querySelector('.generated-message');
var clearMessage = document.querySelector('.clear-message');
var hideImageContainer = document.querySelector('.image-container');
var addCustomMessage = document.querySelector('.add-message');
var header2 = document.querySelector('.header-2');
var customForm = document.querySelector('.custom-form-container');
var customButtonContainer = document.querySelector('.custombutton-container');
var addAffirmation = document.querySelector('.add-affirmation');
var addMantra = document.querySelector('.add-mantra');
var submitPush = document.querySelector('#change-text-btn');
var customMessage = document.querySelector('#text-input');
// new querySelectors to be verified
//eventListeners thatalready work
affirmation.addEventListener('click', selectedAffirmation);
mantra.addEventListener('click', selectedMantra);
receiveMessage.addEventListener('click', getMessage);
clearMessage.addEventListener('click', resetMessageSection);
addCustomMessage.addEventListener('click', showCustomMessageForm);

//new event listeners to be verified

//functions
function showCustomMessageForm (){
  hideImageContainer.classList.toggle('new-style');
  addCustomMessage.classList.add('hidden');
  header2.classList.add('hidden');
  customForm.classList.remove('hidden');
  customButtonContainer.classList.add('hidden');
  resetMessageSection ()
}

function selectedAffirmation(){
  resetMessageSection ()
}
function selectedMantra(){
  resetMessageSection ()
}

function resetMessageSection (){
  message.classList.add('hidden');
  meditationImage.classList.remove('hidden');
  receiveMessage.classList.remove('hidden');
  clearMessage.classList.add('hidden');
}
function getAffirmation(){
  var randomizedAffirmation = affirmations[getRandomIndex(affirmations)];
  return message.innerText = `${randomizedAffirmation}`;
};

function getMantra(){
  var randomizedMantra = mantras[getRandomIndex(mantras)];
  return message.innerText = `${randomizedMantra}`;
};

function getRandomIndex(array){
  return Math.floor(Math.random() * array.length);
};

function getMessage(){
  if (affirmation.checked){
    receiveMessage.classList.add('hidden');
    clearMessage.classList.remove('hidden');
    message.classList.toggle('hidden');
    meditationImage.classList.toggle('hidden');
    getAffirmation();
  } else if (mantra.checked){
    receiveMessage.classList.add('hidden');
    clearMessage.classList.remove('hidden');
    message.classList.toggle('hidden');
    meditationImage.classList.toggle('hidden');
    getMantra()
  } else
    alert ("Select affirmation or mantra to receive a message");
};
