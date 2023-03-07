//required auth options
const options = {
	method: 'POST',
	headers: {
		'X-RapidAPI-Key': '41f3c93319msh95fc82a3c49c3fcp14cfcfjsnf18e5631110f',
		'X-RapidAPI-Host': 'sameer-kumar-aztro-v1.p.rapidapi.com'
	}
}
const signsUrl = 'https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=taurus'
const horoscopeContainer = document.querySelector('.horoscopeContainer')
const tomorrowEl = document.querySelector('.tomorrow')
const todayEl = document.querySelector('.today')
const yesterdayEl = document.querySelector('.yesterday')
let fetchUrl = signsUrl + '&day=today'
// const today = dayjs()

//build url
// sign = document.getElementById('#signModal').value
// dateSelection = document.getElementById('#signModal').value
// fetchUrl = `${signsUrl}?sign=${sign}&day=today`

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

//function for changing url  and fetching for day event listners
function changeDay(day){
    fetchUrl = `${signsUrl}&day=${day}`
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