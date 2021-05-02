// Snack 1
/* Crea un array composto da 10 brand famosi (Sony, Gucci, Apple, Samsung, Dolce&Gabbana). 
- Partendo da questo array creare un nuovo array dove tutti i brand dovranno essere "normalizzati" 
(le lettere maiuscole saranno convertite in minuscolo quindi Gucci diventerà gucci) e aggiungere, sempre in
 questo contesto di "clonazione", una nuova proprietà denominata "foundationYear".
  Quest'ultima proprietà conterrà l'anno (mettete un valore voi, è necessario inserire valore reale) 
in cui l'azienda è stata fondata.  */
 const brands = [ 'sony', 'gucci', 'apple', 'samsung', 'd&g'];
const newBrands = brands.map(element=>{
    return element.toUpperCase();
})
console.log(newBrands)
const object= [];
newBrands.forEach(element=>{
    object.push({
        nome: element,
        anno: numeroRandom(1940, 1980),
    })
})
console.log(object)
function numeroRandom(min, max){
    return Math.floor(Math.random() * (max -min +1)) + min;
}; 
// Snack 2
/* Crea un array composto da 10 automobili. 
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello, alimentazione 
(benzina, diesel, gpl, elettrico, metano).
- Dividi in 3 array separati. Inserire nel primo array solo le auto a benzina, nel
 secondo solo le auto a diesel, nel terzo e ultimo il resto delle auto. 
- Infine stampa separatamente i 3 array. */
const auto = [
    {
        marca: 'auto1',
        modello: 'modello1',
        alimentazione: 'benzina',
    },
    {
        marca: 'auto2',
        modello: 'modello2',
        alimentazione: 'diesel',
    },
    {
        marca: 'auto3',
        modello: 'modello3',
        alimentazione: 'gpl',
    },
    {
        marca: 'auto4',
        modello: 'modello4',
        alimentazione: 'elettrico',
    },
    {
        marca: 'auto5',
        modello: 'modello5',
        alimentazione: 'metano',
    },
    {
        marca: 'auto6',
        modello: 'modello6',
        alimentazione: 'benzina',
    },
    {
        marca: 'auto7',
        modello: 'modello7',
        alimentazione: 'diesel',
    },
    {
        marca: 'auto8',
        modello: 'modello8',
        alimentazione: 'gpl',
    },
    {
        marca: 'auto9',
        modello: 'modello9',
        alimentazione: 'elettrico',
    },
    {
        marca: 'auto10',
        modello: 'modello10',
        alimentazione: 'metano',
    },
    
];

const arrayAuto1 = auto.filter(element =>{
    return element.alimentazione == 'benzina';
})
console.log(arrayAuto1);

const arrayAuto2 = auto.filter(element =>{
    return element.alimentazione == 'diesel';
})
console.log(arrayAuto2);

const arrayAuto3 = auto.filter(element =>{
    return element.alimentazione !== 'diesel' && element.alimentazione !== 'benzina';
})
/* const arrayAuto3 =[];
auto.forEach(element =>{
    if (element.alimentazione !== 'diesel'&& element.alimentazione !== 'benzina'){
        arrayAuto3.push(element);
    }   
}) */
console.log(arrayAuto3)

//SNACK 4
// Crea un array di oggetti che rappresentano degli animali: ogni animale ha un nome, una famiglia e una classe.
// Crea un nuovo array con la lista dei mammiferi.

 const animali= [
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane',  famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
];
 const animaliNew = animali.filter(element=>{
     return element.classe === 'mammiferi'
 });
 console.log(animaliNew)

 // SNACK 5
// Crea un array di 8 oggetti che rappresentano delle persone: ogni persona ha un nome, un cognome e un'età.
// Crea un nuovo array inserendo per ogni persona una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.
// 'Mario Rossi può guidare',
// 'Luigi Verdi non può guidare',
// 'Silvia Neri può guidare',
  
const persone =[
   {
    nome: 'Mario',
    cognome: 'Rossi',
    eta: '18'
   }, 
   {
    nome: 'luigi',
    cognome: 'Verdi',
    eta: '17'
   }, 
   {
    nome: 'Silvia',
    cognome: 'Neri',
    eta: '20'
   }, 
]
const personeNew = [];
persone.forEach(element =>{
    if(element.eta >= 18){
        personeNew.push(element.nome +' '+ element.cognome + ' può guidare')
    }else{
        personeNew.push(`${element.nome} ${element.cognome} non può guidare`)
    }
})
console.log(personeNew);
// SNACK 6
// Crea un array di 8 oggetti che rappresenti i pc in vendita nel nostro negozio: ogni pc ha un nome, una marca, un booleano 
// che indica se esce con Windows come OS di fabbrica (hasWindows: true oppure hasWindows: false), il prezzo originale ed un prezzo scontato
// Creiamo un nuovo array che indichi i pc che hanno Windows e di questi andiamo a tirar fuori la differenza tra prezzo originale e scontato.
const PC = [
    {
        nome: 'XA123ES', 
        marca: 'asus',  
        hasWindows: true, 
        price: 1000, 
        discountPrice: 800 
    },
    {
        nome: 'PA345PYU', 
        marca: 'sumsung',  
        hasWindows: false, 
        price: 1300, 
        discountPrice: 900 
    },
    {
        nome: 'MKL678', 
        marca: 'acer',  
        hasWindows: true, 
        price: 900, 
        discountPrice: 600 
    },
    {
        nome: 'XA123ES', 
        marca: 'apple',  
        hasWindows: false, 
        price: 1500, 
        discountPrice: 1200 
    },
];
const PCNew = [];
PC.forEach(element=>{
    if(element.hasWindows === true){
        PCNew.push({
            ...element,
            diffPrice: element.price - element.discountPrice,
        })
    }
})
console.log(PCNew);

/* SNACK 7
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.
Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino'] */
 
/* const stringhe = ['pippo', 'PLUTO', 'Paperino'];
const stringa = stringhe.map(element=>{
    return element.substr(0,1).toUpperCase() + element.substr(1).toLowerCase()
})
console.log(stringa) */

/* SNACK 8
Un oggetto rappresenta una finestra di un browser e contiene due campi: 
un array di tab aperte
un numero che indica l'indice della tab aperta nell'array:
{
    "tab": ["Facebook", "GitHub", "Gmail"],
    "activeTab": 0
}
Il software deve guardare se c'è un social aperto ed eliminarlo dalle tab.
Nel caso la tab fosse attiva, deve attivare la successiva.
 */

/* Non ho capito bene cosa dobbiamo fare. Dobbiamo creare un programma che  
non consenta l'apertura dei social durante l'orario lavorativo ad esempio? */

const finestra = {
    "tab": ["Facebook", "GitHub", "Gmail"],
    "activeTab": 0
};
console.log(finestra)
finestra.tab.forEach((element)=>{
    if (element.indexOf("Facebook") === finestra.activeTab){
        finestra.activeTab ++
    }
});

console.log(finestra)

/* SNACK 9  -> si potrebbe ottimizzare con una funzione separata per il capitalize
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.
Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino'] */
const stringhe = ['pippo', 'PLUTO', 'Paperino'];
const stringa = stringhe.map(element=>{
    return primaLettera(element) 
})
console.log(stringa)

function primaLettera(element){
    return element.substr(0,1).toUpperCase() + element.substr(1).toLowerCase()
}
 

/* SNACK 4 -> VUE 
Partendo da un array di oggetti con i contatti di una rubrica con nome, cognome, numero, attivo (true,false)
Andiamo a stampare nome cognome e numero dentro una lista.
Fare in modo poi che i contatti non attivi (attivo: false) siano stampati di colore rosso 
mentre gli altri normalmente di nero. Cliccando sul numero della persona fate in modo che appaia in console 
il cognome della persona di cui è stato cliccato il numero */

const app = new Vue({
    el: '#app',
    data: {
        contatti:[
            {
                nome: 'Luca',
                cognome: 'Rossi',
                numero: 3895676655,
                attivo: true,
            },
            {
                nome: 'Paolo',
                cognome:'Verdi',
                numero: 3569876554,
                attivo: true,
            },
            {
                nome: 'Marco',
                cognome: 'Neri',
                numero: 3897896554,
                attivo: false,
            },
            {
                nome: 'Luisa',
                cognome: 'Pappa',
                numero: 3670988776,
                attivo: true,
            },
        ],
        
    },
    methods:{
        funzione(index){
            console.log(this.contatti[index].nome)
        }
    }
})