

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

let hettel = false

for (let i = 0; i < randomok.length; i++) {
    if (randomok[i] % 7 == 0) {
        hettel = true
    }
}

if (hettel == true) {
    console.log("Van hettel oszthato szam");
} else {
    console.log("Nincs hettel oszthato szam");
}

// e

let nega = false

for (let i = 0; i < randomok.length; i++) {
    if (randomok[i-1] < 0 && 0 < randomok[i+1]) {
        nega = true
    }
}
    
if (nega == true) {
    console.log("Van olyan elem melynek mindkét szomszédja negatív");
} else {
    console.log("Nincs olyan elem melynek mindkét szomszédja negatív");
}

// f

let nagyobb = false

for (let i = 0; i < randomok.length; i++) {
    if(randomok[i] > randomok[i-1] + randomok[i+1]) {
        nagyobb = true
    }
}
    
if (nagyobb == true) {
    console.log("Van olyan elem amely nagyobb a szomszédjai összegénél");
} else {
    console.log("Nincs olyan elem amely nagyobb a szomszédjai összegénél");
}

// g

let isis = 0;

for (let i = 0; i < randomok.length; i++) {
    if (randomok[i] % 3 == 0 && !randomok[i] % 5 == 0) {
    isis = randomok[i];
    
    }
}
console.log("Az utolsó 3-mal igen de 5-tel nem oszthato szam:" + isis);

// h
let db2 = 0;
let vane = false;

for (let i = 0; i < randomok.length; i++) 
    {
        db2 = 0;
        for (let j = 0; j < randomok.length; j++)
            {
                if (randomok[i] == randomok[j])
                    {
                        db2++;
                    }
                if (db2 >= 3)
                    {
                        vane = true;
                    }
            }
    }

if (vane == true) {
    console.log("Van olyan elem amely 3-szor is szerepel");
} else {
    console.log("Nincs olyan elem amely 3-szor is szerepel");
}   

// i

let no = false;

for (let i = 0; i < randomok.length; i++) {
    if (randomok[i] == randomok[i+1] || randomok[i] == randomok[i-1]) {
    no = true;
    }
    else {no = false}
}

if (no == true) {console.log("Van olyan elem amely mindkét szomszédja azonos vele")

} else {console.log("Nincs ilyen elem")}


// j
let ige = [];
for (let i = 0; i < randomok.length; i++) {
    if (randomok[i] % 10 == 0)
    {
        ige.push(i);
     }
}

console.log("10 többszöröseinek az indexei:" + ige);


// k

let yap = 0;
for (let i = 0; i < randomok.length; i++) {
    yap += randomok[i];


}


let atlag = yap / randomok.length;


let alatti = [];
for (let i = 0; i < randomok.length; i++) {
    if (randomok[i] < atlag) {
        alatti.push(randomok[i]);
        
    }
}
console.log("Az átlagnál kisebb dobások(" + alatti.length +"db):" + alatti);


let autok = ["Mercedes", "BMW", "Audi", "Volvo", "Renault"];


autok.sort();
console.log(autok)

autok.reverse();
console.log(autok);

