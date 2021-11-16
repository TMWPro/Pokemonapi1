const apiUrl = "https://pokeapi.co/api/v2/pokemon";
const randomPokemon = document.querySelector("#randomPokemon");
const btn1 = document.getElementById("btn1");

function getPokemonData() {
  let randomNum = Math.floor(Math.random() * 800) + 1;
  let apiData = `${apiUrl}/${randomNum}`;
  fetch(apiData)
    .then((response) => response.json())
    .then((data) => {
      generateCard(data.sprites.back_default)
      console.log(data.sprites.back_default);
    });
}

btn1.addEventListener("click", getPokemonData);

generateCard = (data) => {
  randomPokemon.src = data;

  /*randomPokemon.innerHTML = html;
  console.log("name:",img);
*/
};
