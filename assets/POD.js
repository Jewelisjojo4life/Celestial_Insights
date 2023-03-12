const apiKey = "enBTmSmHbWFRpxPzHkEBcyf2xpV5YSBBhXGKkqnj";
const apiURL = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

const form = document.querySelector('form');
form.addEventListener('submit', handleFormSubmit);

async function handleFormSubmit(event) {
  event.preventDefault();
  const date = document.querySelector('#date-input').value;
  const data = await fetchData(date);
  localStorage.setItem('apiData', JSON.stringify(data));
  window.open('nasa.html');


 }

async function fetchData(date) {
  const url = `${apiURL}&date=${date}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}



  
  
  

