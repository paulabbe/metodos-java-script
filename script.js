
const pokeones =
[
 'Pikachu',
 'Charmander',
 'Bulbasaur',
 'Squirtle'
]
constpokeonesmayusculas=pokeones.map( poke=>poke.toUpperCase())
console.log(constpokeonesmayusculas)


const pokemones = [
    {
    nombre: 'Pikachu',
    tipo: 'Electrico'
    },
    {
    nombre: 'Charmander',
    tipo: 'Fuego',
    },
    {
    nombre: 'Bulbasaur',
    tipo: 'Planta'
    },
    {
    nombre: 'Squirtle',
    tipo: 'Agua'
    },
    {
    nombre: 'Charmeleon',
    tipo: 'Fuego'
    },
    {
    nombre: 'Weedle',
    tipo: 'bicho'
    },
    {
    nombre: 'Charizard',
    tipo: 'Fuego'
    }
   ]

constfuegopokemones=pokemones.filter(elemento=>elemento.tipo==='Fuego')
console.log(constfuegopokemones);



//Pd:Para hacer esto de fibonacci la parte A) me ayudo cristian el ayudante , en realidad me cuesta entenderlo aun//

let number = 17
let fibonacci=[];
function lista(){
fibonacci[0]=0;
fibonacci[1]=1;

for (let i=2 ; i< 17; i++){
    fibonacci[i] = fibonacci[i-2] + fibonacci[i-1]
}
return fibonacci;
}
console.log(lista());



constfibonacci=
[
    0,   1,   1,  2,  3,   5,   8,
   13,  21,  34, 55, 89, 144, 233,
  377, 610, 987
]

constfibonaccipares=fibonacci.filter(elemento=>elemento%2===0)
console.log(constfibonaccipares)

constfibonacciimpares=fibonacci.filter(elemento=>elemento%3===0)
console.log(constfibonacciimpares)