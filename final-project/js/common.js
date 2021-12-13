function toggleMenu() {
    document
      .getElementsByClassName("navigation")[0]
  .classList.toggle("responsive");
  }

//show date when document was last modified
document.getElementById("date-last-modified").textContent = document.lastModified;