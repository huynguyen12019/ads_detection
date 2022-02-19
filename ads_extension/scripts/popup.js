const predictButton = document.getElementById("control__predict");
const prepareLabel = document.querySelector(".result__prepare");
const waitLabel = document.querySelector(".result__wait");
const adsLabel = document.querySelector(".result__ads");
const nonadsLabel = document.querySelector(".result__nonads");
const adsAccLabel = document.querySelector(".accuracy__ads");
const nonadsAccLabel = document.querySelector(".accuracy__nonads");
const URL = "http://localhost:5000/api/ads-detection";

let result;

function getBase64Image() {
  const base64image = JSON.parse(localStorage.data).base64image;
  return base64image;
}
function getWinsize() {
  const winsize = JSON.parse(localStorage.data).winsize;
  return winsize;
}
function showResult(result) {
  // save result
  localStorage.result = JSON.stringify(result);
  // show result
  waitLabel.classList.add("hidden");
  console.log(result);
  if (result[0] > 0.5) {
    adsLabel.classList.remove("hidden");
  } else {
    nonadsLabel.classList.remove("hidden");
  }
  adsAccLabel.textContent = result[0];
  nonadsAccLabel.textContent = result[1];
}
async function sendBase64Img() {
  prepareLabel.classList.add("hidden");
  waitLabel.classList.remove("hidden");
  adsLabel.classList.add("hidden");
  nonadsLabel.classList.add("hidden");

  adsAccLabel.textContent = 0;
  nonadsAccLabel.textContent = 0;

  fetch(URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      base64image: getBase64Image(),
      winsize: getWinsize(),
    }),
  })
    .then((response) => {
      console.log(response);
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      showResult(data.result);
    })
    .catch((error) => {
      alert(error.stack);
      console.log(error);
    })
    .finally(() => {});
}
function initPage() {
  if (localStorage.result) {
    const result = JSON.parse(localStorage.result);
    waitLabel.classList.add("hidden");
    prepareLabel.classList.add("hidden");
    console.log(result);
    if (result[0] > 0.5) {
      adsLabel.classList.remove("hidden");
    } else {
      nonadsLabel.classList.remove("hidden");
    }
    adsAccLabel.textContent = result[0];
    nonadsAccLabel.textContent = result[1];
  }
}
initPage();
predictButton.addEventListener("click", sendBase64Img);
