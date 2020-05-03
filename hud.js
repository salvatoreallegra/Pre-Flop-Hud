//Populate select list with opponent names from local storage
let opponents = JSON.parse(localStorage.getItem("opponents"));
//let opponents = localStorage.getItem("opponents");
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

//display name above matrix
let playerLabel = document.getElementById("playerName");

let sel = document.getElementById("opponents-select");
for (let i = 0; i < opponents.length; i++) {
  let opt = document.createElement("option");
  opt.value = i;
  opt.text = opponents[i].name;
  sel.add(opt, null);
}

//Paint appropriate grid when player is changed on select, will default to paint rfi
sel.addEventListener("change", (event) => {
  mode = "rfi";
  paintGrid(opponents, mode);
  btnRFI.style.backgroundColor = "blue";
  btn3B.style.backgroundColor = "";
  btnCC.style.backgroundColor = "";
  playerLabel.innerText = sel.selectedOptions[0].innerText;
});

//toggle mode button color to show it's selected and assign a mode on toggle
let mode = null;

let btnRFI = document.getElementById("rfi");
let btnCC = document.getElementById("cc");
let btn3B = document.getElementById("3b");

btnRFI.addEventListener("click", function () {
  if (this.style.backgroundColor === "blue") {
    this.style.backgroundColor = "";
  } else {
    this.style.backgroundColor = "blue";
    btnCC.style.backgroundColor = "";
    btn3B.style.backgroundColor = "";
    mode = "rfi";
  }
  paintGrid(opponents, mode);
});

btnCC.addEventListener("click", function () {
  if (this.style.backgroundColor === "blue") {
    this.style.backgroundColor = "";
  } else {
    this.style.backgroundColor = "blue";
    btnRFI.style.backgroundColor = "";
    btn3B.style.backgroundColor = "";
    mode = "cc";
  }
  paintGrid(opponents, mode);
});

btn3B.addEventListener("click", function () {
  if (this.style.backgroundColor === "blue") {
    this.style.backgroundColor = "";
  } else {
    this.style.backgroundColor = "blue";
    btnRFI.style.backgroundColor = "";
    btnCC.style.backgroundColor = "";
    mode = "3b";
  }
  paintGrid(opponents, mode);
});

//Add event listeners to the 13x13 grid on index.html and push hands to hand array on click
document.querySelectorAll(".box").forEach((item) => {
  item.addEventListener("click", (event) => {
    if (mode === null) {
      alert("Please Select a Mode Before Entering Hands");
    }
    console.log("Selection ....", sel.options[sel.selectedIndex].innerText);
    switch (mode) {
      case "rfi":
        for (let i = 0; i < opponents.length; i++) {
          if (opponents[i].name === sel.options[sel.selectedIndex].innerText) {
            opponents[i].rfiHands.push(item.innerText);
          }
          item.style.backgroundColor = "red";
        }
        break;
      case "cc":
        for (let i = 0; i < opponents.length; i++) {
          if (opponents[i].name === sel.options[sel.selectedIndex].innerText) {
            opponents[i].ccHands.push(item.innerText);
          }
          item.style.backgroundColor = "red";
        }
        break;
      case "3b":
        for (let i = 0; i < opponents.length; i++) {
          if (opponents[i].name === sel.options[sel.selectedIndex].innerText) {
            opponents[i].threeBetHands.push(item.innerText);
          }
          item.style.backgroundColor = "red";
        }
        break;
    }

    localStorage.setItem("opponents", JSON.stringify(opponents));
  });
});

function paintGrid(opponents, mode) {
  document.querySelectorAll(".box").forEach((item) => {
    item.style.backgroundColor = "blue";
  });
  let currentOpponent = sel.options[sel.selectedIndex].innerText;
  if (mode === "rfi") {
    opponents.forEach(function (arrayItem) {
      if (arrayItem.name === currentOpponent) {
        arrayItem.rfiHands.forEach(function (hand) {
          console.log("Handy " + hand);
          document.querySelectorAll(".box").forEach((item) => {
            if (hand === item.innerText) {
              item.style.backgroundColor = "red";
            }
          });
        });
      } //end if check if name == optionbox
    }); //end foreach on opponents
  } // end if for mode
  if (mode === "cc") {
    opponents.forEach(function (arrayItem) {
      if (arrayItem.name === currentOpponent) {
        arrayItem.ccHands.forEach(function (hand) {
          console.log("Handy " + hand);
          document.querySelectorAll(".box").forEach((item) => {
            if (hand === item.innerText) {
              item.style.backgroundColor = "red";
            }
          });
        });
      } //end if check if name == optionbox
    }); //end foreach on opponents
  } // end if for mode
  if (mode === "3b") {
    opponents.forEach(function (arrayItem) {
      if (arrayItem.name === currentOpponent) {
        arrayItem.threeBetHands.forEach(function (hand) {
          console.log("Handy " + hand);
          document.querySelectorAll(".box").forEach((item) => {
            if (hand === item.innerText) {
              item.style.backgroundColor = "red";
            }
          });
        });
      } //end if check if name == optionbox
    }); //end foreach on opponents
  } // end if for mode
} //end function

console.log(localStorage);
