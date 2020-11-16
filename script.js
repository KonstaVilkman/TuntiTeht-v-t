// alert("Täällä ollaan");

console.log("Täällä ollaan");

function laskutehtava(ekaNumero, tokaNumero){
  return (ekaNumero + tokaNumero);
} 

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

  console.log('------------');

const tehtavaTehty = laksyt.filter(function(laksy){
  return laksy.tehty ===false;
});
console.log(tehtavaTehty);

const numero = 7;
const nimi= 'jorma';

if(numero < 18 || nimi === 'jorma'){
  console.log('Olet alaikäinen tai Olet ystäväni Jorma')
}else if(numero === 18){
  console.log('Olet juuri täyttänyt 18!')
}
else{
    console.log('Olet täysi-ikäinen')
}
const access = numero > 18 ? 'granted' : 'denied';
console.log(access);

function laskutehtava(){

} 
console.log(laskutehtava(5, 2));

/////////////////////////////////////////////////////////////////////////////////
const kurssinOsat = document.querySelectorAll('.sisalto');
kurssinOsat.forEach((osa)=>console.log(osa));

const ul = document.querySelector('.kurssi')

const kurssinappi = document.querySelector('.kurssinappi')
const nimiSisalto = document.querySelector('#nimi');
const asiaSisalto = document.querySelector('#tieto');
const virhe = document.querySelector('.virheilmoitus');
const viesti = document.querySelector('#tiedot');

kurssinappi.addEventListener('click', e=>{
  e.preventDefault();
  if(nimiSisalto.value === '' || asiaSisalto.value === ''){
    virhe.classList.add('virhe');
    virhe.innerHTML = 'Täytä kaikki kentät';
    kurssinappi.style.background = 'red';
    kurssinappi.value = 'Virhe, en lisännyt tietoa.';
    setTimeout(()=> virhe.remove(), 3000);
    setTimeout(()=> kurssinappi.style.background=rbg(245, 245, 245), 3000);
    setTimeout(()=> kurssinappi.value = 'Lisää tieto', 3000);
  }else{

  const li = document.createElement('li');

li.appendChild(document.createTextNode(`${nimiSisalto.value} : ${asiaSisalto.value}`));

  viesti.appendChild(li);

  nimiSisalto.value = '';
  asiaSisalto.value = ''; 
  }
});

const merkitseValmiit = document.querySelector('.merkinta');

merkitseValmiit.addEventListener('click', e => {
  e.preventDefault();
  if(document.querySelector('#tehta').checked){
    ul.children[0].innerHTML = '<input type="checkbox" id="tehta" checked>HTML tunnit pidetty';
  }else{
    ul.children[0].innerHTML = '<input type="checkbox" id="tehta">HTML';
  }
  if(document.querySelector('#tehtb').checked){
    ul.children[1].innerHTML = '<input type="checkbox" id="tehtb" checked>CSS tunnit pidetty';
  }else{
    ul.children[1].innerHTML = '<input type="checkbox" id="tehtb">CSS';
  }
  if(document.querySelector('#tehtc').checked){
    ul.children[2].innerHTML = '<input type="checkbox" id="tehtc" checked>JavaScript tunnit pidetty';
  }else{
    ul.children[2].innerHTML = '<input type="checkbox" id="tehtc">JavaScript';
  }
  if(document.querySelector('#tehtd').checked){
    ul.children[3].innerHTML = '<input type="checkbox" id="tehtd" checked>CI/CD tunnit pidetty';
  }else{
    ul.children[3].innerHTML = '<input type="checkbox" id="tehtd">CI/CD';
  }
});

