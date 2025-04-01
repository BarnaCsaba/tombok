//ez egy tömb létrehozása:
let nyelvek = ["HTML", "CSS", "JS"];

//de lehet így is:
let prog = [
    "HTML",
    "CSS",
    "JS"
    ];
    
//indexek meghatározása:
let progi = [];
nyelvek [0] = "HTML";
nyelvek [1] = "CSS";
nyelvek [2] = "JS";

//lehet még így is:
let nyelv = new Array("HTML", "CSS", "JS");

//tömb elemek elérése:

let nyelvek = ["HTML", "CSS", "JS"]; 
console.log(nyelvek[0]);
console.log(nyelvek[1]);
console.log(nyelvek[2]);

//összes elem elérése:

let nyelvek = ["HTML", "CSS", "JS"]; 
console.log(nyelvek);

//elemek módosítása:

let nyelvek = ["HTML", "CSS", "JS"];
console.log("Módosítás előtt: " + nyelvek[1]) ;
nyelvek[1] = "PHP";
console.log("Módosítás után: " + nyelvek[1]);

//plussz elem, hozzáadás:
nyelvek.push("PHP"); //itt adunk hozzá egy újabb elemet a tömbhöz
console.log(nyelvek);

nyelvek[nyelvek.length] = "PHP"; //új elemet adunk a tömbhöz
console.log(nyelvek);

//tömb hossza:
console.log(nyelvek.length);
