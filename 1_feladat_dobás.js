randomok = [];
for (let i = 0; i < 100; i++) {
randomok.push(Math.floor(Math.random() * 6) + 1);

}

let db = 0;
for (let i = 0; i < randomok.length; i++) {
    db += randomok[i];


}

//console.log(db);
let atlag = db / randomok.length;
console.log("A dobások átlaga:" + atlag);

let feletti = [];
for (let i = 0; i < randomok.length; i++) {
    if (randomok[i] > atlag) {
        feletti.push(randomok[i]);
        
    }
}
console.log("Az átlagnál nagyobb dobások(" + feletti.length +"db):" + feletti);


// let egyesek = 0;
// let kettesek = 0;
// let harmasok = 0;
// let negyesek = 0;
// let otosok = 0;
// let hatosok = 0;
// for (let i = 0; i < randomok.length; i++) 
//     {
//     if (randomok[i] == 1) 
//         {
//             egyesek++;
//         }
//         else if (randomok[i] == 2) 
//         {
//             kettesek++;
//         }
//         else if (randomok[i] == 3) 
//         {
//             harmasok++;
//         }
//         else if (randomok[i] == 4) 
//         {
//             negyesek++;
//         }
//         else if (randomok[i] == 5) 
//         {
//             otosok++;
//         }
//         else if (randomok[i] == 6) 
//         {
//             hatosok++;
//         }
//     }

//     console.log("Egyes dobások:" + egyesek + " db");
//     console.log("Kettes dobások:" + kettesek + " db");
//     console.log("Harmas dobások:" + harmasok + " db");
//     console.log("Negyes dobások:" + negyesek + " db");
//     console.log("Otos dobások: " + otosok + " db");
//     console.log("Hatos dobások:" + hatosok + " db");

    let db2 = 0;
    for (let i = 1; i < 6; i++) {
        db = 0;
        for (let j = 0; j < randomok.length; j++)
             {
                if (randomok[j] == i)
                    {
                        db++;
                    }

             }
             console.log(`${i} dobások: ${db} db`);
    }

    