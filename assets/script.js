const fetchButton = document.getElementById("fetch-button");
fetchButton.addEventListener("click", fetchApods);

function fetchApods() {
  const startDate = new Date(document.getElementById("start-date").value);
  const endDate = new Date(document.getElementById("end-date").value);

  const apiKey = "GlSGHq2TnpNyMQJfxZHBDc3q4DLE9E8GR2yVhl4f";
  const apodUrls = [];

  for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
    const formattedDate = date.toISOString().slice(0, 10);
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${formattedDate}`;
    apodUrls.push(apiUrl);
  }

  const apodPromises = apodUrls.map(url => fetch(url).then(response => response.json()));
  Promise.all(apodPromises)
    .then(apods => {
      const apodsDiv = document.getElementById("apods");
      apodsDiv.innerHTML = "";

      apods.forEach(apod => {
        const title = apod.title;
        const explanation = apod.explanation;
        const imageUrl = apod.url;
        const image = document.createElement("img");
        image.src = imageUrl;
        apodsDiv.appendChild(image);
      });
    })
    .catch(error => console.error(error));
}