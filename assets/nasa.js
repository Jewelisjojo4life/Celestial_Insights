const apodImage = document.getElementById("apod-image");
const apodTitle = document.getElementById("apod-title");
const apodDescription = document.getElementById("apod-description");


const apiData = JSON.parse(localStorage.getItem('apiData'));


apodImage.src = apiData.url;
apodTitle.textContent = apiData.title;
apodDescription.textContent = apiData.explanation;
