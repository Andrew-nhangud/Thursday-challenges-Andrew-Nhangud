const FREE_WARNING = "Free shipping only applies to single customer orders";
const BANNED_WARNING =
  "Unfortunately we do not ship to your country of residence";
const NONE_SELECTED = 0;

const customers = 1;
const currentlocation = "RSA";
let currency = null;
let shipping = null;

const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150 * NONE_SELECTED;
const batteries = 35 * 2;
const pens = 5 * NONE_SELECTED;

if (currentlocation === "RSA") {
  currency = "R";
  shipping = 400;
} else {
  currency = "$";
  shipping = location === "NAM" ? 600 : 800;
}

const total = shoes + batteries + pens + shirts + toys;
const isFreeLocal = currency === "R" && total > 1000;
const isFreeInt = currency === "$" && total > 60;
const isFree = isFreeLocal || isFreeInt;
const isFreeWarning = isFree && customers !== 1;
const totalWithShipping = total + shipping;
const isBanned = location === "NK";

if (isFreeWarning) console.log(FREE_WARNING);
if (isFree && !isFreeWarning) shipping = 0;

const withShipping = total + shipping;
console.log(
  isBanned ? BANNED_WARNING : "Price: " + currency + totalWithShipping
);
