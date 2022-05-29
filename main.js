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
var submitPush = document.querySelector('.change-text');
var customMessage = document.querySelector('.custom-input');

affirmation.addEventListener('click', selectedAffirmation);
mantra.addEventListener('click', selectedMantra);
receiveMessage.addEventListener('click', getMessage);
clearMessage.addEventListener('click', resetMessageSection);
addCustomMessage.addEventListener('click', showCustomMessageForm);
submitPush.addEventListener('click', submitMessage);
addAffirmation.addEventListener('click', pushCustomAffirmation);
addMantra.addEventListener('click', pushCustomMantra);

function submitMessage(event){
  event.preventDefault();
  if (addAffirmation.checked && customMessage.value){
  affirmations.push(customMessage.value);
  toggleFormAndMessage ();
  onSubmit ();
} else if (addMantra.checked && customMessage.value){
  mantras.push(customMessage.value);
  toggleFormAndMessage ();
  onSubmit ();
} else
  alert ("Select affirmation or mantra AND add custom message before submitting");
};
function showCustomMessageForm (){
  meditationImage.classList.remove('hidden');
  message.classList.add('hidden');
  affirmation.checked = false;
  mantra.checked = false;
  toggleFormAndMessage ();
};
function getMessage(){
  if (affirmation.checked){
    getAffirmation();
  } else if (mantra.checked){
    getMantra();
  } else
  alert ("Select affirmation or mantra to receive a message");
};
function getAffirmation(){
  receiveMessage.classList.add('hidden');
  clearMessage.classList.remove('hidden');
  message.classList.toggle('hidden');
  meditationImage.classList.toggle('hidden');
  var randomizedAffirmation = affirmations[getRandomIndex(affirmations)];
  return message.innerText = `${randomizedAffirmation}`;
};
function getMantra(){
  receiveMessage.classList.add('hidden');
  clearMessage.classList.remove('hidden');
  message.classList.toggle('hidden');
  meditationImage.classList.toggle('hidden');
  var randomizedMantra = mantras[getRandomIndex(mantras)];
  return message.innerText = `${randomizedMantra}`;
};
function selectedAffirmation(){
  resetMessageSection ()
};
function selectedMantra(){
  resetMessageSection ()
};
function onSubmit () {
  meditationImage.classList.add('hidden');
  message.classList.remove('hidden');
  receiveMessage.classList.add('hidden')
  clearMessage.classList.remove('hidden');
  message.innerText = customMessage.value;
  customMessage.value = '';
  addAffirmation.checked = false;
  addMantra.checked = false;
};
function toggleFormAndMessage (){
  hideImageContainer.classList.toggle('new-style');
  header2.classList.toggle('hidden');
  customForm.classList.toggle('hidden');
  customButtonContainer.classList.toggle('hidden');
};
function resetMessageSection (){
  message.classList.add('hidden');
  meditationImage.classList.remove('hidden');
  receiveMessage.classList.remove('hidden');
  clearMessage.classList.add('hidden');
};
function getRandomIndex(array){
  return Math.floor(Math.random() * array.length);
};
