import { getStringUntil1337, getTimeUntil1337 } from "./leet.helpers.ts";

function printTimeTo1377() {
  console.clear();
  console.log(getStringUntil1337(getTimeUntil1337(new Date())));
}

printTimeTo1377();

setInterval(printTimeTo1377, 1 * 60 * 1000);
