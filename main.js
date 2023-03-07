async function start() {
  const response = await fetch("https://dog.ceo/api/breeds/list/all");
  const data = await response.json();
  createBreedList(data.message)
}

function createBreedList(breedList) {
  document.getElementById("breed").innerHTML = "hey"
}