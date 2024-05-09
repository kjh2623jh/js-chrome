const images = ["0.png", "1.png", "2.png"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("div");
bgImage.id = "background"
bgImage.style.backgroundImage = `url(img/${chosenImage})`;
bgImage.style.backgroundRepeat = "repeat";

document.body.appendChild(bgImage);