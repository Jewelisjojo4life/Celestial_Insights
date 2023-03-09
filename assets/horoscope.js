
//required auth options
const options = {
	method: 'POST',
	headers: {
		'X-RapidAPI-Key': '41f3c93319msh95fc82a3c49c3fcp14cfcfjsnf18e5631110f',
		'X-RapidAPI-Host': 'sameer-kumar-aztro-v1.p.rapidapi.com'
	}
}
const signsUrl = "https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=taurus&day=today" 
const horoscopeContainer = document.querySelector('.horoscopeContainer')
// const today = dayjs()

//build url
// sign = document.getElementById('#signModal').value
// dateSelection = document.getElementById('#signModal').value
// fetchUrl = `${signsUrl}?sign=${sign}&day=${dateselection}`

//get data
async function getSignData() {
  let response = await fetch(signsUrl, options);
  var data = await response.json();
  displayData(data);
}

//display data

async function displayData(data) {
  Object.keys(data).forEach((key) => {
    let keyEl = document.createElement("p");
    keyEl.textContent = `${key}: ${data[key]}`;
    horoscopeContainer.append(keyEl);
  });
}

getSignData();

async function displayData(data){
    console.log(data)
    //this will eventually pick the proper image from an array or hard coded in if statements, but for testing its a static image
    // let signImg = document.createElement('img')
    // signImg.src = "./assets/images/taurus.jpg"
    //this will eventually be pulled from the modal
    // signName.textContent = "Taurus"
    signDescription = document.querySelector('.description')
    signDescription.textContent = data.description
    signDate = document.querySelector('.daterange')
    signDate.textContent = data.date_range
    signLuckynumber = document.querySelector('.luckynumber')
    signLuckynumber.textContent = `Lucky Number: ${data.lucky_number}`
    signmood = document.querySelector('.mood')
    signmood.textContent = `Mood: ${data.mood}`
}

getSignData()

color:"Gold"
compatibility:"Virgo"
current_date:"March 7, 2023"
date_range:"Apr 21 - May 20"
description:"Your sweetheart isn't deliberately out to snow you. The issue you two have been wrangling over has been tricky because neither of you knows quite what to do about it. That includes you, remember, so don't be too hard on them."
lucky_number:"70"
lucky_time:"1pm"
mood:"Tolerance"
>>>>>>> 1f5db950bb32381796285a39577342f304ab48d1

//required auth options
const options = {
	method: 'POST',
	headers: {
		'X-RapidAPI-Key': '41f3c93319msh95fc82a3c49c3fcp14cfcfjsnf18e5631110f',
		'X-RapidAPI-Host': 'sameer-kumar-aztro-v1.p.rapidapi.com'
	}
}
const signsUrl = 'https://sameer-kumar-aztro-v1.p.rapidapi.com/'
const horoscopeContainer = document.querySelector('.horoscopeContainer')
const signh2El = document.querySelector('.signh2')
const tomorrowEl = document.querySelector('.tomorrow')
const todayEl = document.querySelector('.today')
const yesterdayEl = document.querySelector('.yesterday')
const modalEl = document.querySelector('.signlist')
const signImg = document.querySelector('.signImg')
savedSign = JSON.parse(localStorage.getItem("signCache"))

//setup modal
$( "#dialog" ).dialog({
    autoOpen: false,
    show: {
      effect: "blind",
      duration: 500
    },
    hide: {
      effect: "blind",
      duration: 250
    }
  });

$( "#opener" ).on( "click", function() {
    $( "#dialog" ).dialog( "open" );
});

//if users sign isnt saved locally, open modal
if (!savedSign){
    //set savedSign in case user closes window and doesn't select a sign.
    savedSign={sign:'aquarius'}
    $( "#dialog" ).dialog( "open" )
}

//eventlistner for modal signs
modalEl.addEventListener('click', function(event){
    selectedSign = event.target
    savedSign.sign = selectedSign.textContent
    fetchUrl = `${signsUrl}?sign=${savedSign.sign}&day=today`
    localStorage.setItem('signCache', JSON.stringify(savedSign))
    getSignData()
    $("#dialog").dialog("close")
})

fetchUrl = `${signsUrl}?sign=${savedSign.sign}&day=today`

//get data
async function getSignData(){
    let response = await fetch(fetchUrl, options)
	var data = await response.json()
    displayData(data)
}

//display data
async function displayData(data){
    signImg.src = `./assets/images/${savedSign.sign}.jpg`
    signh2El.textContent = savedSign.sign
    signDescription = document.querySelector('.description')
    signDescription.textContent = data.description
    signDate = document.querySelector('.daterange')
    signDate.textContent = data.date_range
    signLuckynumber = document.querySelector('.luckynumber')
    signLuckynumber.textContent = `Lucky Number: ${data.lucky_number}`
    signmood = document.querySelector('.mood')
    signmood.textContent = `Mood: ${data.mood}`
}

//function for changing url and fetching for day event listners
function changeDay(day){
    fetchUrl = `${signsUrl}?sign=${savedSign.sign}&day=${day}`
    getSignData()
}

//eventlistners for day buttons
yesterdayEl.addEventListener('click', function(){
    changeDay('yesterday')
})

todayEl.addEventListener('click', function(){
    changeDay('today')
})

tomorrowEl.addEventListener('click', function(){
    changeDay('tomorrow')
})

getSignData()
>>>>>>> 860786ea0a011de7468ef69b16be6a5182a9bb2a
