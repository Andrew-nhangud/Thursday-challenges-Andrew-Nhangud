const FREE_WARNING = "Free shipping only applies to single customer orders";
const BANNED_WARNING =
  "Unfortunately, we do not ship to your country of residence";
const NONE_SELECTED = 0;

const currentLocation = "RSA";
let customers = 1;
let shipping;
let currency = "$";

let shoes = 300 * 1;
let toys = 100 * 5;
let shirts = 150 * NONE_SELECTED;
let batteries = 35 * 2;
let pens = 5 * NONE_SELECTED;
const total = shoes + batteries + pens + shirts + toys;

if (location === "RSA") {
  shipping = 400;
  currency = "R";
} else if (location === "NAM") {
  shipping = 600;
  currency = "$";
} else {
  shipping = 800;
}

if (total > 1000) {
  if (location === "NAM" && customers < 2) {
    if (location === "RSA") {
      shipping = 0;
    }
  }
}

if (shipping === 0 && customers !== 1) {
  console.log(FREE_WARNING);
}

location === "NK"
  ? console.log(BANNED_WARNING)
  : console.log("Price:", currency, total + shipping);
