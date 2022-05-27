var affirmation = document.querySelector('.affirmation');
var mantra = document.querySelector('.mantra');
var receiveMessage = document.querySelector('button');
var message = document.querySelector('p');
var meditationImage = document.querySelector('.image');
var generatedMessage = document.querySelector('.generated-message');


//radio buttons. how to get them to work
affirmation.addEventListener('click', selectedAffirmation);
mantra.addEventListener('click', selectedMantra);

//user clicks and will hide image and show message
// receiveMessage.addEventListener('click', getMessage);
receiveMessage.addEventListener('click', getMessage);

function selectedAffirmation(){
  message.classList.add('hidden');
  meditationImage.classList.remove('hidden');
}
function selectedMantra(){
  message.classList.add('hidden');
  meditationImage.classList.remove('hidden');
}

function getMessage(){
  message.classList.toggle('hidden');
  meditationImage.classList.toggle('hidden');
  if (affirmation.checked){
    getAffirmation();
  } else
    getMantra()
};

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


// Toggle image class or img.  going to replace that div with a new div that will display the randomized mantra.
// similar to render and replacing data models.
// Think remove image and replace it with the Message
// is thsi code block below useful in my get mantra/affirmation function so that they just populate the element and all that the get message button does is refrsh the page.  How to delete/replacee (is this going to be a toggle feature?)
// savedCoversSection.innerHTML = '';
// for(var i = 0; i < savedCovers.length; i++){
//   if(!savedCovers.includes(savedCovers)){
//     savedCoversSection.innerHTML +=
//     `<section class = "mini-cover">
//     <img class="cover-image" id = "${savedCovers[i].id}" src="${savedCovers[i].cover}">
//     <h2 class="cover-title" > ${savedCovers[i].title} </h2>
//     <h3 class="tagline">A tale of <span class="tagline-1" >${savedCovers[i].tagline1}</span> and <span class="tagline-2" >${savedCovers[i].tagline2}</span></h3>
//     </section>`
