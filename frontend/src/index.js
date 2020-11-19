/*fetch('http://localhost:3000/pokemon/150')
.then(response => response.json())
.then(json => document.getElementById('pokemon').innerHTML= `${json.name} ${json.pok_type} ${json.dex_num}
</br><img src='https://img.pokemondb.net/sprites/bank/normal/${json.name.toLowerCase()}.png' alt=${json.name}>`);*/

//json.forEach(json => document.getElementById('pokelist').innerHTML += `<li id=${json.dex_num}>${json.name}</li>`)



console.log('test1');
document.addEventListener("DOMContentLoaded", event => {
    fetchPokemon()
});


function fetchPokemon() {
    console.log("Which gets called first?")
   fetch('http://localhost:3000/pokemon')
  .then(response => response.json())
  .then(json => {
      displayPokemon(json)
    });
}


function displayPokemon(pokemonArr) {
      pokemonArr.forEach(json => { 
          document.getElementById('pokelist').innerHTML += `<li id=${json.dex_num}>${json.name}</li>`
      })
      addListenersToNode()
}

function addListenersToNode() {
    document.querySelectorAll("li").forEach(node => {
        node.addEventListener("click", createDomelements)
    })
}

function createDomelements(e) {
    // might want to create a Div with images and info in there?
//     let button = document.createElement("button")
//    let container =  document.getElementById("container")
//    container.append(button)
    // document.getElementById("container").innerHTML += "<button> </button>"

    alert("you clicked, now die")
}

  


