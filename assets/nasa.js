const fetchButton = document.getElementById("fetch-button");
fetchButton.addEventListener("click", fetchApods);

function fetchApods() {
  const apiKey = "GlSGHq2TnpNyMQJfxZHBDc3q4DLE9E8GR2yVhl4f";
  const apodUrls = [];

  const startDate = $("#start-date").datepicker("getDate");
  const endDate = $("#end-date").datepicker("getDate");

  for (let date = new Date(startDate); date <= endDate; date.setDate(date.getDate() + 1)) {
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

        const titleElem = document.createElement("h2");
        titleElem.textContent = title;
        apodsDiv.appendChild(titleElem);

        const explanationElem = document.createElement("p");
        explanationElem.textContent = explanation;
        apodsDiv.appendChild(explanationElem);

        apodsDiv.appendChild(image);
      });
    })
    .catch(error => console.error(error));
}

$(function() {
  
  var minDate = new Date(2023, 0, 1);
  var maxDate = new Date(2023, 12, 30);

 
  $("#start-date").datepicker({
    dateFormat: "yy-mm-dd",
    minDate: minDate,
    maxDate: maxDate,
    onSelect: function(selectedDate) {
    
      var startDate = $(this).datepicker("getDate");
      var minEndDate = new Date(startDate.getTime());
      minEndDate.setDate(startDate.getDate() + 7); 
      $("#end-date").datepicker("option", "minDate", minEndDate);
    }
  });
  $("#end-date").datepicker({
    dateFormat: "yy-mm-dd",
    minDate: minDate,
    maxDate: maxDate,
    onSelect: function(selectedDate) {
      
      var endDate = $(this).datepicker("getDate");
      var maxStartDate = new Date(endDate.getTime());
      maxStartDate.setDate(endDate.getDate() - 7); 
      $("#start-date").datepicker("option", "maxDate", maxStartDate);
    }
  });
}); 
