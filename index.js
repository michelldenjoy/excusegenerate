  let who = ["Cleopatra", "Superwoman", "Xena", "Princess Mononoke"];
  let action = ["attacked", "hit", "killed", "fight with"];
  let what = ["the enemy", "the Joker", "Freddy Krueguer", "Voldemort"];
  let when = ["last night", "this morning", "yesterday", "when i was working"];
  let and = ["and i had to help her"];

  function randomgenerador(listadepalabras) {
    const palabra = listadepalabras[Math.floor(Math.random() * listadepalabras.length)];

    return palabra;
  }

  const randomExcuse = () => `${randomgenerador(who)} ${randomgenerador(action)} ${randomgenerador(what)} ${randomgenerador(when)} ${randomgenerador(and)}`;
  console.log(randomExcuse());

//document.getElementById("generador").innerHTML = randomExcuse()

// esto es para el boton
function mostrarExcusa() {
  document.getElementById("generador").innerHTML = randomExcuse();
}
mostrarExcusa();
document.getElementById("boton").addEventListener("click", mostrarExcusa);
};
