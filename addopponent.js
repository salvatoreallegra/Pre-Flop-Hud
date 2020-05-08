//Add click event listener to add player button
//

let button = document.querySelector("#addPlayer");
button.addEventListener("click", () => {
  let opponents = JSON.parse(localStorage.getItem("opponents") || "[]");

  let opponentName = document.getElementById("opponent").value;
  opponents.push({
    name: opponentName,
    rfiHands: [],
    ccHands: [],
    threeBetHands: [],
    totalHands: 0,
    rfiCount: 0,
    openLimpCount: 0,
    vpip: 0,
    raise: 0,
    call: 0,
  });
  console.log(opponents, "Array of opponents");
  storePlayerHand(opponents);
  console.log("xxxx", localStorage);
});

function storePlayerHand(opponents) {
  localStorage.setItem("opponents", JSON.stringify(opponents));
  console.log("opponents in function", opponents);
}
