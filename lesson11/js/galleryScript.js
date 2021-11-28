let imagesToLoad = document.querySelectorAll('img[data-src]');
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

imagesToLoad.forEach((img) => {
    loadImages(img);
});

if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if(item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  } else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }


//To display days passed since last vist
const lastDate = new Date(localStorage.getItem("lastDate")); //getting the last date
localStorage.setItem("lastDate", currentDate); // creating the last date with the current date.

const daySpace = document.getElementById("days-passed");

function calcDays (current, last) {
  const lastDate = new Date(last);
  const currentDate = new Date(current);

  const timePassed = lastDate.getTime() - currentDate.getTime();
  const daysPassed = timePassed / (1000 * 3600 * 24);

  return Math.round(daysPassed);
}

const numDays = calcDays(currentDate, lastDate); 
if (numDays < 1) {
    daySpace.innerHTML = "Today";
}
else if (numDays == 1) {
    daySpace.innerHTML = numDays + " day ago"
}
else {
    daySpace.innerHTML = numDays + " days ago"
}