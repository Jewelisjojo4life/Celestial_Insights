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
let fetchUrl = signsUrl + '&day=today'
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
    $( "#dialog" ).dialog( "close" )
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
    console.log(data)
    //this will eventually pick the proper image from an object or hard coded in if statements, but for testing its a static image in html
    // let signImg = document.createElement('img')
    // signImg.src = "./assets/images/taurus.jpg"
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

//function for changing url  and fetching for day event listners
function changeDay(day){
    fetchUrl = `${signsUrl}?sign=${savedSign.sign}&day=${day}`
    console.log(fetchUrl)
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