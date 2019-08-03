
let razem = (wyplata, premia) => {
    let razem;
    razem = wyplata + premia;
    return razem;
}
let dreams = razem(3000,1000)


let sentence = `Chce zrabiac ${dreams} PLN`;
console.log(sentence)




function multiplyNumbers(a, b, c) {
    let result = a * b * c;
    console.log(result)
    return result;
  }
  
sum = multiplyNumbers(1,2,3);
    console.log(sum)

if (sum % 2 == 0){
    console.log(`LICZBA ${sum} jest parzysta`)
} else {
    console.log(`LICZBA ${sum} jest nieparzysta`)
}


let tab = ["Asia", "Ala", "Kaja","Rafal"]
for(let i=0; i < tab.length; i++) {
    console.log(i+1 + " " + "name is:" + tab[i])
}



// funkcja oblicz silnie 
// wariant 1- przyjmuje paramert n i zwraca wynik - silnia n (n)
// wariant 2- rekurencja - wywoluje sama siebie 

function silniaPrzezPetle(n){
    let wynik = 1;
    if(n<0){
        return 'Silnia od ujemniej nie istnieje'
    } else if (n < 2){
        return wynik
    }
    // obsluga silni 
    for (n; n > 0;--n){
        wynik = wynik *n;
    }
    return wynik
}

console.log("pentla for", silniaPrzezPetle(4));

