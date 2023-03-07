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
async function getSignData(){
    let response = await fetch(signsUrl, options)
	var data = await response.json()
    displayData(data)
}

//display data
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