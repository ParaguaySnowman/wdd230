const myList = document.querySelector('ul');
const myInput = document.querySelector('input');
const button = document.querySelector('button');

button.onclick = function() {
  let favChapter = myInput.value;
  myInput.value = '';

  const listItem = document.createElement('li');
  const listText = document.createElement('span');
  const listBtn = document.createElement('button');

  listItem.appendChild(listText);
  listText.textContent = favChapter;
  listItem.appendChild(listBtn);
  listBtn.textContent = 'Delete';
  myList.appendChild(listItem);

  listBtn.onclick = function(e) {
    myList.removeChild(listItem);
  }

  myInput.focus();
}