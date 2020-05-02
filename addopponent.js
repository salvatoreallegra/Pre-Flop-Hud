//Add click event listener to add player button
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
  alert("Clicked");
  storePlayerHand(opponents);
});

function storePlayerHand(opponent) {
  localStorage.setItem("opponent", JSON.stringify(opponent));
}

console.log(opponents);
