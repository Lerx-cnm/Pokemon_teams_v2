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
    fetch(`http://localhost:3000/pokemon/${e.target.id}`)
    .then(response => response.json())
    .then(json => {

        document.querySelector('.container').innerHTML = ""

        let pokemon = document.createElement('section');
        let h2 = document.createElement("h2");
        let type = document.createElement("p")
        let dex = document.createElement("p");
        let pic = document.createElement('img');

        h2.textContent = json["name"];
        h2.className = 'header'
        type.textContent = `Type: ${json["pok_type"]}`;
        type.className = 'header'
        dex.textContent = json["dex_num"].toString();
        dex.className = 'dex_num'
        pic.textContent = "pokemon"
        pic.setAttribute('src', `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${("000" + json["dex_num"]).slice(-3)}.png`)
        pic.setAttribute('width', "350")
        pic.className = 'picture'

        let div = document.querySelector('.container')
        div.style.backgroundColor = "white";
        if(div.innerHTML === ""){
            document.querySelector('.container').appendChild(h2);
            document.querySelector('.container').appendChild(type);
            document.querySelector('.container').appendChild(dex);
            div.appendChild(pic);
            selectBackground(json["pok_type"])
        }
    }) 
}

function selectBackground(type){
    let div = document.querySelector('.container')
    if(type === "Grass"){
        div.style.backgroundImage = 'linear-gradient(to bottom left, green, #00ff00)';
    }
    else if(type === "Fire"){
        div.style.backgroundImage = 'linear-gradient(to top right, red, yellow)';
    }
    else if(type === "Water"){
        div.style.backgroundImage = 'linear-gradient(to bottom, #668cff, #0040ff)';
    }
    else if(type === "Bug"){
        div.style.backgroundImage = 'linear-gradient(to bottom, #39e600, #666633)';
    }
    else if(type === "Ghost"){
        div.style.backgroundImage = 'linear-gradient(to bottom, #cc0099, #800060)';
    }
    else if(type === "Fighting"){
        div.style.backgroundImage = 'linear-gradient(to bottom left, #e63900, #802b00)';
    }
    else if(type === "Dragon"){
        div.style.backgroundImage = 'linear-gradient(to bottom right, #0086b3, #330033)';
    }
    else if(type === "Flying"){
        div.style.backgroundImage = 'linear-gradient(to bottom left, #33ccff, #009973)';
    }
    else if(type === "Poison"){
        div.style.backgroundImage = 'radial-gradient(circle at top right, #7733ff, #800080)';
    }
}


  


