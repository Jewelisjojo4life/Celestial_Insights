const apiKey = "GlSGHq2TnpNyMQJfxZHBDc3q4DLE9E8GR2yVhl4f";
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${GlSGHq2TnpNyMQJfxZHBDc3q4DLE9E8GR2yVhl4f}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const title = data.title;
    const explanation = data.explanation;
    const imageUrl = data.url;
    const image = document.createElement("img");
    image.src = imageUrl;
    document.body.appendChild(image);
  })
  .catch(error => console.error(error));
  console.log(img)