const apiKey = "enBTmSmHbWFRpxPzHkEBcyf2xpV5YSBBhXGKkqnj";
const apiUrl = "https://api.nasa.gov/planetary/apod";

const form = document.querySelector("form");
form.addEventListener("submit", event => {
  event.preventDefault();
  const date = document.getElementById("date").value;
  const queryUrl = `${apiUrl}?api_key=${apiKey}&date=${date}`;
  fetch(queryUrl)
    .then(response => response.json())
    .then(data => {
      const apodDiv = document.getElementById("apod");
      apodDiv.innerHTML = ""; 
      const image = document.createElement("img");
      image.src = data.url;
      image.alt = "NASA Astronomy Picture of the Day";
      apodDiv.appendChild(image);

      const title = document.createElement("p");
      title.textContent = `Title: ${data.title}`;
      apodDiv.appendChild(title);

      const explanation = document.createElement("p");
      explanation.textContent = `Explanation: ${data.explanation}`;
      apodDiv.appendChild(explanation);
    })
    .catch(error => {
      console.log(error);
    });
});



