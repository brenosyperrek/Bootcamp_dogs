async function start() {
  const response = await fetch("https://dog.ceo/api/breeds/list/all")
  const data = await response.json()
  createBreedList(data.message)
}

start()

function createBreedList(breedList){
  document.getElementById("breed").innerHTML = `
  <select onchange="loadByBreed(this.value)">
    <option>Escolha uma raça de cachorro</option>
    ${Object.keys(breedList).map(function (breed){
      return `<option>${breed}</option>`
    }).join('')}
  </select>
  `
}

async function loadByBreed(breed){
  if (breed != "Escolha uma raça de cachorro"){
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
    const data = await response.json()
    console.log(data)
  }
  
  
}