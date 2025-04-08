let betuk = new Set(['a', 'b', 'c', 'd']);

for(let elem of betuk)
    {
        console.log(elem);
    }
betuk.add('e')

for(let elem of betuk)
    {
        console.log(elem);
    }

let fBetu = 'f';

betuk.add(fBetu);
for(let elem of betuk)
    {
        console.log(elem);
    }

    betuk.forEach(function(ertek) {
        console.log(ertek);
        });

let cBetu = 'c';
if (betuk.has('c')) {
    console.log(`Ez az elem ${cBetu}a halmazban van!`);
    }

betuk.delete("e")
for (let elem of betuk)
    {
        console.log(elem);
    }
        
let iterator = betuk.values();
console.log(iterator);
// console.log(iterator.next().value);

for (let elem of betuk)
    {
        console.log(iterator.next().value);
    }