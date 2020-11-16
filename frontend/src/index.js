/*fetch('http://localhost:3000/pokemon/150')
.then(response => response.json())
.then(json => document.getElementById('pokemon').innerHTML= `${json.name} ${json.pok_type} ${json.dex_num}
</br><img src='https://img.pokemondb.net/sprites/bank/normal/${json.name.toLowerCase()}.png' alt=${json.name}>`);*/

fetch('http://localhost:3000/pokemon')
.then(response => response.json())
.then(json => json.forEach(json => document.getElementById('pokelist').innerHTML += `<li id=${json.dex_num}>${json.name}</li>`));




