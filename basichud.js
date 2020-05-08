let opponents = JSON.parse(localStorage.getItem("opponents"));

if (opponents === null) {
  alert("Please Add an Opponent");
}
//sort objects in array alphabetically by name
function compare(a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}
opponents.sort(compare);

let sel = document.getElementById("opponents-select");
for (let i = 0; i < opponents.length; i++) {
  let opt = document.createElement("option");
  opt.value = i;
  opt.text = opponents[i].name;
  sel.add(opt, null);
}
let playerLabel = document.getElementById("playerName");
let vpipLabel = document.getElementById("vpip");
let pfrLabel = document.getElementById("pfr");

sel.addEventListener("change", (event) => {
  playerLabel.innerText = sel.selectedOptions[0].innerText;
});
let btnRaise = document.getElementById("raise");
let btnCall = document.getElementById("call");
let btnFold = document.getElementById("fold");

btnRaise.addEventListener("click", function () {
  for (let i = 0; i < opponents.length; i++) {
    if (opponents[i].name === sel.options[sel.selectedIndex].innerText) {
      opponents[i].vpip++;
      opponents[i].totalHands++;
      opponents[i].raise++;
      vpipLabel.innerText = (opponents[i].vpip * 100) / opponents[i].totalHands;
      pfrLabel.innerText = (opponents[i].raise * 100) / opponents[i].totalHands;
    }
    localStorage.setItem("opponents", JSON.stringify(opponents));
    //let opponents = JSON.parse(localStorage.getItem("opponents"));
  }
});
btnCall.addEventListener("click", function () {
  for (let i = 0; i < opponents.length; i++) {
    if (opponents[i].name === sel.options[sel.selectedIndex].innerText) {
      opponents[i].vpip++;
      opponents[i].totalHands++;
      vpipLabel.innerText = (opponents[i].vpip * 100) / opponents[i].totalHands;
      pfrLabel.innerText = (opponents[i].raise * 100) / opponents[i].totalHands;
    }
    localStorage.setItem("opponents", JSON.stringify(opponents));
  }
});

btnFold.addEventListener("click", function () {
  for (let i = 0; i < opponents.length; i++) {
    if (opponents[i].name === sel.options[sel.selectedIndex].innerText) {
      opponents[i].totalHands++;
      vpipLabel.innerText = (opponents[i].vpip * 100) / opponents[i].totalHands;
      pfrLabel.innerText = (opponents[i].raise * 100) / opponents[i].totalHands;
    }
    localStorage.setItem("opponents", JSON.stringify(opponents));
  }
});

console.log(localStorage.opponents);
