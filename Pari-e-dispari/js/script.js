/*
1. Utente sceglie pari o dispari e un numero da 1 a 5,
2. Generiamo un numero random da 1 a 5 usando una funzione,
3. Sommiamo i due numeri,
4. Stabiliamo se l utente ha indovinato.
*/

const evenB = document.getElementById("evenB");
const oddB = document.getElementById("oddB");
const userSelectedNumber = document.getElementById("number");


const play = document.getElementById("play")

evenB.addEventListener("click", function(){
  calculate("even");
  console.log("hai scelto pari");
});

oddB.addEventListener("click", function(){
  calculate("odd");
  console.log("hai scelto dispari");
});

play.addEventListener("click", function(){
  const userNumber = parseInt(userSelectedNumber.value); //RISOLTO, ho aggiuto il parseint, idea delle 1.35 di notte
  const randomNumber = Math.floor(Math.random() * 5 ) + 1;
  console.log(randomNumber)
  if (userNumber >= 1 && userNumber <= 5){
    calculate(userNumber);
  } else {
    alert("Inserisci un numero valido")
  }
})

if ((randomNumber + userNumber) % 2 === 0) {
  console.log("a")
} 

//niente, ci ho rinunciato










