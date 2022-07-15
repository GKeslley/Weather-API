const select = document.querySelector("select");

async function changeWeather(city) {
  const weatherResponse = await fetch(
    `https://goweather.herokuapp.com/weather/${city}`
  );
  const weatherJSON = await weatherResponse.json();
  console.log(weatherJSON);
}

select.addEventListener("change", () => {
  changeWeather(select.options[select.selectedIndex].text);
  console.log(select.options[select.selectedIndex].text);
});
