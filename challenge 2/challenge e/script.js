import { display as nwabisa } from "./nwabisa.js";
import { display as johannes } from "./johannes.js";
import { display as alex } from "./alex.js";

document.querySelector("#nwabisa").innerText = nwabisa;
document.querySelector("#johannes").innerText = johannes;
document.querySelector("#alex").innerText = alex;

console.log("Roles:", nwabisa, johannes, alex);
