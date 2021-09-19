//show to the user the current year
let d = new Date();
let currentYear = d.getFullYear();
document.querySelector(".current_year").innerHTML = currentYear;


//show to the user the last modified date
let lastModified = new Date();
document.getElementById("last_updated").innerHTML = lastModified.toUTCString();