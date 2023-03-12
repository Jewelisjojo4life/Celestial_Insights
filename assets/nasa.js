


const data = JSON.parse(localStorage.getItem('apiData'));



const dataContainer = document.querySelector('#data-container');
  
    const imgElement = document.createElement('img');
    imgElement.src = data.url;
    dataContainer.appendChild(imgElement);
  
    const titleElement = document.createElement('h2');
    titleElement.textContent = data.title;
    dataContainer.appendChild(titleElement);
  
    const dateElement = document.createElement('p');
    dateElement.textContent = `Date: ${data.date}`;
    dataContainer.appendChild(dateElement);
  
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = data.explanation;
    dataContainer.appendChild(descriptionElement);

  