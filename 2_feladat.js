

randomok = [];
for (let i = 0; i < 100; i++) {
randomok.push(Math.floor(Math.random() * 101) -50);
}

// let nagy = Max.Value(randomok);






// a
let max = 0;
let index = 0;
for (let i = 0; i < randomok.length; i++) {
    if (randomok[i] > max) {
        max = randomok[i];
        index = i;
    }
}
console.log("A legnagyobb elem:" + max + " indexe:" + index);

// b
let elemössz = 0;
for (let i = 0; i < randomok.length; i++) {
    elemössz += randomok[i];
        
    
}
console.log("Az elemek összege:" + elemössz);   

// c (páros páratlan)

let paros = []
let paratlan = []

for (let i = 0; i < randomok.length; i++) {
    if(randomok[i] % 2 == 0) {
        paros.push(randomok[i]);
    } else {
        paratlan.push(randomok[i]);
    }
}
console.log("Paros elemek darabszama:" + paros.length);
console.log("Paratlan elemek darabszama:" + paratlan.length);

// d
