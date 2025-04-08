let A = new Set([]);
let B = new Set([]);

for (let i = 0; i < 20; i++) {
    A.add(Math.floor(Math.random() * 101) + 1);
    }
console.log(A);
console.log(B);


    for (let i = 0; i < 20; i++) {
    B.add(Math.floor(Math.random() * 100) + 1);
    }

//a
console.log(A.difference(B));

//b
console.log(A.intersection(B));

//c
console.log(A.union(B));

//d
console.log(A.isSubsetOf(B));   

//e
let a = prompt("Kérek egy 1 és 100 közötti elemet: ")

let b =false;
for (let elem of A)
    {
       if (elem == a)
        {
            b = true;
        }
    }
 if (b == true)
            {
                console.log(`Ez az elem a halmazban van! ${a}`);
            }
        else (console.log("Nincs benne!"));