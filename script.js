const select = document.querySelector("select");
const cityName = document.querySelector(".cityName");
const temperatura = document.querySelector(".temperatura");
const vento = document.querySelector(".vento");
const descricao = document.querySelector(".descricao");
const img = document.querySelector("img");

async function changeWeather(city) {
  const weatherResponse = await fetch(
    `https://goweather.herokuapp.com/weather/${city}`
  );
  const weatherJSON = await weatherResponse.json();

  cityName.innerText = city;
  temperatura.innerText = weatherJSON.temperature;
  vento.innerText = weatherJSON.wind;
  descricao.innerText = weatherJSON.description;

  const time = new Date();

  if (time.getHours() >= 18) {
    descricao.innerText = "Night";
    img.src = "./img/moon2.png";
    document.body.style.background = "rgba(0, 0, 0, 0.5)";
  } else if (weatherJSON.description === "Partly cloudy") {
    img.src = "./img/cloud.png";
  } else if (weatherJSON.description === "Patchy rain possible") {
    img.src = "./img/rain.png";
  } else {
    img.src = "./img/sunny.png";
  }
}

select.addEventListener("change", () => {
  changeWeather(select.options[select.selectedIndex].text);
});
