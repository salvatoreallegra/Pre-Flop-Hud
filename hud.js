document.querySelectorAll(".box").forEach((item) => {
  item.addEventListener("click", (event) => {
    alert(item.innerHTML);
  });
});

var opponents = [
  {
    name: "whizbanger",
    rfiHands: ["AKs", "AA"],
    ccHands: ["99", "88"],
    threeBetHands: ["AA", "KK"],
  },
  {
    name: "Julietta",
    rfiHands: ["AA", "AA"],
    ccHands: ["99", "77"],
    threeBetHands: ["AQs", "KK"],
  },
];

function storePlayerHand(opponent) {
  localStorage.setItem("opponent", JSON.stringify(opponent));
}
storePlayerHand(opponents);
let retrievedUser = JSON.parse(localStorage.getItem("opponent"));
console.log(retrievedUser);
