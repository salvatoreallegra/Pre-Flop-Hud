//Populate select list with opponent names from local storage
let localStorageOpponents = JSON.parse(localStorage.getItem("opponent"));
console.log("Trying to get name " + localStorageOpponents[0].name);

let sel = document.getElementById("opponents-select");
for (let i = 0; i < localStorageOpponents.length; i++) {
  let opt = document.createElement("option");
  opt.value = i;
  opt.text = localStorageOpponents[i].name;
  sel.add(opt, null);
}

//Add event listeners to the 13x13 grid on index.html
document.querySelectorAll(".box").forEach((item) => {
  item.addEventListener("click", (event) => {
    alert(item.innerHTML);
  });
});
