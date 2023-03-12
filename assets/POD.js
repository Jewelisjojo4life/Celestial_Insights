const apiKey = "enBTmSmHbWFRpxPzHkEBcyf2xpV5YSBBhXGKkqnj";
const apiURL = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

const form = document.querySelector('form');
form.addEventListener('submit', handleFormSubmit);

async function handleFormSubmit(event) {
  event.preventDefault();
  const date = document.querySelector('#date-input').value;
  const data = await fetchData(date);

  const displayWindow = window.open('nasa.html');

  displayWindow.addEventListener('load', () => {
    displayWindow.localStorage.setItem('data', JSON.stringify(data));
    displayData(data, displayWindow);
  });
}

async function fetchData(date) {
  const url = `${apiURL}&date=${date}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function displayData(data, displayWindow) {
  const dataContainer = displayWindow.document.querySelector('#data-container');

  const imgElement = displayWindow.document.createElement('img');
  imgElement.src = data.url;
  dataContainer.appendChild(imgElement);

  const titleElement = displayWindow.document.createElement('h2');
  titleElement.textContent = data.title;
  dataContainer.appendChild(titleElement);

  const dateElement = displayWindow.document.createElement('p');
  dateElement.textContent = `Date: ${data.date}`;
  dataContainer.appendChild(dateElement);

  const descriptionElement = displayWindow.document.createElement('p');
  descriptionElement.textContent = data.explanation;
  dataContainer.appendChild(descriptionElement);
}


  
  
  

