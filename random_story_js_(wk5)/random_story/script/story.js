/* Script to generate random story in HTML file
*/

// complete variable and function definitions

// insertx values
var nameArr = ["Willy the Goblin",
"Big Daddy",
"Father Christmas"]

// inserty values
var locArr = ["the soup kitchen",
"Disneyland",
"the White House"]

//insertz values
var evntArr = ["spontaneously combusted",
"melted into a puddle on the sidewalk",
"turned into a slug and crawled away"]

var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

//declare standard imperial measurement names
var tempMes = "farenheit"
var weightMes = "pounds"

//declare values for the standard weight and temperature
var temperature = 94
var weight = 300

// listen for a click event on the "randomise" button and call 'result' (func defined below)
randomize.addEventListener('click', result);

// return a random selection from an array
function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

//called when '.randomize' selector is clicked. Does not need event object (?)
function result(temperature, weight) {

  // check if customName has a value given (keyboard entry in text field)
  if(customName.value != '') {
    //if conditional is met assign the value of the text input to 'name'
    var name = customName.value;
  }

  //test if 'uk' radio button is checked
  if(document.getElementById("uk").checked) {
    //name
    //Not sure, substitute values in round() for variables here?
    weight = Math.round(300/2.20462);
    temperature =  Math.round((94-32)/1.8);
    tempMes = "Degrees"
    weightMes = "Kilograms"
  }

// assign values from return of randomising selection function to value referenced in output string
var insertx = randomValueFromArray(nameArr);
var inserty = randomValueFromArray(locArr);
var insertz = randomValueFromArray(evntArr);

console.log("insertx: " + insertx);
console.log("inserty: " + inserty);
console.log("insertz: " + insertz);

  //pass in random story to be assigned here
  story.textContent = "It was " + temperature + " " + tempMes +" outside, so " + insertx + " went for a walk. When they got to " + inserty + ", they stared in horror for a few moments, then " + insertz + ". Bob saw the whole thing, but he was not surprised — " + insertx + " weighs " + weight + " " + weightMes + ", and it was a hot day.";
  story.style.visibility = 'visible';

}
