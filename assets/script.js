const apiKey = "i6ht4Vf64sSg4L0Euk7qOc5NpHJA2qHFezgzLVNy";
const apiURL = "https://api.nasa.gov/planetary/apod?api_key=${apiKey}";

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const title = data.title;
    const explanation = data.explanation;
    const imageUrl = data.url;
    const image = document.createElement("img");
    image.src = imageUrl;
    document.body.appendChild(image);
  })
  .catch((error) => console.error(error));
/*
// nasa api key l5GtDWfkWyULq63gu1indn3GHKzKgrbbb2hXXiZB
// nasa api https://api.nasa.gov/planetary/apod?api_key=l5GtDWfkWyULq63gu1indn3GHKzKgrbbb2hXXiZB&count=5
>>>>>>> 75054c9491d97d26eca23bd21e6ee3885e47686a*/
