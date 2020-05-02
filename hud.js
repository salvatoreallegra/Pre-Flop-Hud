let opponentselect = document.getElementById("opponents-select");
let localStorageOpponents = JSON.parse(localStorage.getItem("opponent"));
console.log("Trying to get name" + localStorageOpponents[0].name);
for (index in localStorageOpponents) {
  opponentselect.options[opponentselect.options.length] = new Option(
    localStorageOpponents[index].name,
    index
  );
}

//Add event listeners to the 13x13 grid on index.html
document.querySelectorAll(".box").forEach((item) => {
  item.addEventListener("click", (event) => {
    alert(item.innerHTML);
  });
});

let opponents = JSON.parse(localStorage.getItem("opponent"));

let button = document.querySelector("#addPlayer");
button.addEventListener("click", () => {
  let opponentName = document.getElementById("opponent").value;
  console.log("Button clicked.");
  console.log(opponentName);
  opponents.push({
    name: opponentName,
    rfiHands: ["AKs", "AA"],
    ccHands: ["99", "88"],
    threeBetHands: ["AA", "KK"],
  });
  console.log(opponents);
  storePlayerHand(opponents);
});

function storePlayerHand(opponent) {
  localStorage.setItem("opponent", JSON.stringify(opponent));
}

console.log(opponents);
