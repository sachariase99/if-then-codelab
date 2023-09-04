// variabler du skal bruge i din kode...
const A = 10;
const B = 30;
const C = '30';
const D = 10;
const E = 40;

// Opgave 1: skriv et expression der viser true når A er lig med B eller A er lig med D.
if ( A == B || A == D ) {
    console.log('true - opg1');
} else {
    console.log('false - opg1');
}


//opgave 2: skriv en If then statement der bliver TRUE når  A er større end B og A er mindre end E.
if (A > B && A < E) {
    console.log('true - opg2');
} else {
    console.log('false - opg2');
}


//opgave 3: Skriv en If then statement med  && og  || der kun er sand når alle expressions er sande.
if ((A == B || A == D) && (A > B && A < E)) {
    console.log('true - opg3');
} else {
    console.log('false - opg3');
}


//opgave 4: Skriv en If then statement der kan finde ud af om F er "undefined" eller har en værdi, ved at bruge !.
if (!F) {
    console.log('F er undefined eller ingen værdi har.');
} else {
    console.log('F har en værdi');
}