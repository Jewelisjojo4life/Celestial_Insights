//required auth options
const options = {
	method: 'POST',
	headers: {
		'X-RapidAPI-Key': '41f3c93319msh95fc82a3c49c3fcp14cfcfjsnf18e5631110f',
		'X-RapidAPI-Host': 'sameer-kumar-aztro-v1.p.rapidapi.com'
	}
}
const signsUrl = "https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=aquarius&day=today" 
const horoscopeContainer = document.querySelector('.horoscopeContainer')

//get data
async function getSignData(){
    let response = await fetch(signsUrl, options)
	var data = await response.json()
    displayData(data)
}

//display data
async function displayData(data){
    Object.keys(data).forEach((key)=>{
        let keyEl = document.createElement('p')
        keyEl.textContent = `${key}: ${data[key]}`
        horoscopeContainer.append(keyEl)
    })
}

getSignData()