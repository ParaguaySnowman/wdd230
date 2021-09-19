//show current year
document.querySelector("#current-year").textContent = new Date().getFullYear();

//show date when document was last modified
document.getElementById("date-last-modified").textContent = document.lastModified;