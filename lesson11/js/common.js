/***********************Menu Toogling***************************/
function toggleMenu() {
  document
    .getElementsByClassName("navigation")[0]
    .classList.toggle("responsive");
}


/********************Footer**************************************/
//show current year
document.querySelector("#current-year").textContent = new Date().getFullYear();

//show current date
var date = new Date();
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

document.getElementById("current-date").textContent = date.toLocaleDateString('en-UK',options);

