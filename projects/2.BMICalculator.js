const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const height = parseInt(document.getElementById("height").value);
  const weight = parseInt(document.getElementById("weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 1000)).toFixed(2);
    //showresults
    results.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      results.innerHTML = `Under Weight ${bmi}`;
    } else if (bm1 > 18.6 && bmi < 24.9) {
      results.innerHTML = `Normal Range ${bmi}`;
    } else {
      results.innerHTML = `Overweight ${bmi}`;
    }
  }
});
