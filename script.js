// alert("Täällä ollaan");

console.log("Täällä ollaan");

// muuttujat: let tai const

let ika = 16;
ika = ika + 1;

console.log(ika);

const pii=3.14;

console.log('Piin likiarvo:' + pii);

const etunimi="Konsta"; //string
const sukunimi="Vilkman"; //string
const syntymavuosi=2004; //interger eli kokonaisluku
const Lahtelainen=true; //boolear
let maarittelematon; //unindentified

console.log("syntymävuoden tyypit: " + typeof syntymävuosi);
console.log("nimen tyypi: " + typeof etunimi);
console.log("lahtelaisuuden tyypit: " + typeof lahtelainen);

// template string
console.log('Nimi on ' + etunimi + ' ' + sukunimi + ' ja syntymävuoteni on ' + syntymavuosi);

console.log(`Nimeni on ${etunimi} ${sukunimi} ja syntymävuoteni on ${syntymavuosi}`);


const henkilotieto= `Nimeni on ${etunimi} ${sukunimi} ja syntymävuoteni on ${syntymavuosi}`;
console.log(henkilotieto);
console.log(`henkilotieton pituus on: ${henkilotieto.lenght}`);
console.log(henkilotieto.toUpperCase());

console.log(henkilotieto.substring(0, 8));

console.log(henkilotieto.substring(0,9).toUpperCase())

console.log(henkilotieto.split(' ')[2]);

console.log(henkilotieto.split(' '));

const autoja = ['Hyundai', 'Toyota', 'Volvo'];

autoja[3]='BMW';

autoja.push('Saab');

autoja.unshift('Mersu');

autoja.pop();

console.log(autoja);

const opiskelija = {
  id: 1,
  etunimi: 'Konsta',
  sukunimi: 'Vilkman',
  syntymavuosi: 2004,
  koulutus: ['insinööri', 'maisteri', 'opettajan pätevyys'],
  osoite: {
    katu: 'Strålberginkatu 8C',
    postinumero: 15810,
    kunta: 'Lahti',
  }
}
console.log(opiskelija.etunimi);


const laksyt = [
    {
    id: 1,
    tehtava: 'Ohjelmointi, HTML',
    tehty: true
    },
    {
    id: 2,
    tehtava: 'Ohjelmointi, CSS',
    tehty: true
    },
    {
    id: 3,
    tehtava: 'Ohjelmointi, JS',
    tehty: false
    },
];

for(let i=0; i <= 10; i++){
  console.log(`iternaatio luku on: ${i}`);
}
let i = 0;
while(i<=10){
  console.log(`WHile loopin iternaatio luku on: ${i}`);
  i++;
}

for(let i=0; i<laksyt.length; i++){
  console.log(laksyt[i].tehtava);
}

const laksytTehtava = laksyt.map(function(laksy){
  return laksy.tehtava;
  
});

  console.log(laksytTehtava);