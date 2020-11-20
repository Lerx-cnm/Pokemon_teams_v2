/*fetch('http://localhost:3000/pokemon/150')
.then(response => response.json())
.then(json => document.getElementById('pokemon').innerHTML= `${json.name} ${json.pok_type} ${json.dex_num}
</br><img src='https://img.pokemondb.net/sprites/bank/normal/${json.name.toLowerCase()}.png' alt=${json.name}>`);*/

document.addEventListener("DOMContentLoaded", event => {
    fetchPokemon()
});


function fetchPokemon() {
   fetch('http://localhost:3000/pokemon')
  .then(response => response.json())
  .then(json => {
      displayPokemon(json)
    });
}


function displayPokemon(pokemonArr) {
      pokemonArr.forEach(json => { 
          document.getElementById('pokelist').innerHTML += `<li id=${json.dex_num} class=${json.pok_type}>${json.name}</li>`
      })
      addListenersToNode()
      createMenu()
}

function createMenu(){

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

        let h2 = document.createElement("h2");
        let type = document.createElement("p")
        let dex = document.createElement("p");
        let pic = document.createElement('img');
        let button = document.createElement('button');

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
        button.className = 'myButton'
        button.textContent = "Add To Team"

        let div = document.querySelector('.container')
        div.style.backgroundColor = "white";
        if(div.innerHTML === ""){
            document.querySelector('.container').appendChild(h2);
            document.querySelector('.container').appendChild(type);
            document.querySelector('.container').appendChild(dex);
            div.appendChild(pic);
            div.appendChild(button);
            selectBackground(json["pok_type"])
            addButtonListener(json)
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
    else if(type === "Ice"){
        div.style.backgroundImage = 'radial-gradient(circle at bottom left, #ccffff, #00b386)';
    }
    else if(type === "Rock"){
        div.style.backgroundImage = 'linear-gradient(to bottom, #cc9900, #b38600, #805500)';
    }
    else if(type === "Psychic"){
        div.style.backgroundImage = 'linear-gradient(to bottom left, #ff6666, #ffcc99, #ff9966)';
    }
    else if(type === "Electric"){
        div.style.backgroundImage = 'linear-gradient(to bottom right, #b3b300, #cccc00, #666600)';
    }
    else if(type === "Ground"){

    }
    else if(type === "Normal"){
        
    }
}

function addButtonListener(json){
    let button = document.getElementsByClassName('myButton')
    let team = document.getElementById('userlist')
    let teamlist = document.getElementsByClassName('userteamlist')
    button[0].addEventListener('click', () => {
        if(teamlist.length != 3 ){
        let pokemon = new Pokemon(json.name, json.pok_type, json.dex_num)
        document.getElementById(pokemon.dex_num).hidden = true;
        document.getElementsByClassName('container')[0].innerHTML = ""
        team.innerHTML += `<li id=${pokemon.dex_num} class=userteamlist>${pokemon.name}</li>`
        pokemon.weaknesses
        removeListener(pokemon.dex_num)
        addTeamButton()
        }else{
            alert("You have reached the max limit of 3 Pokemon")
        }
      })
}

function removeListener(pokemon){
    document.querySelectorAll(".userteamlist").forEach(node => {
        node.addEventListener("click", () => {
            node.remove()
            document.getElementById(node.id).hidden = false;
            
        })
    })
}

function addTeamButton(){
    let button = document.createElement('button')
    button.className = 'teambutton'
    button.textContent = "Submit Team"
    if(!document.getElementsByClassName('teambutton')[0]){
    document.getElementById('title').appendChild(button)
    }

    button.addEventListener('click', () => {
        if(document.getElementsByClassName('userteamlist').length < 3){
            alert("Please select three pokemon")
        }else{
           alert("I worked")     
        }
    })
}
  


