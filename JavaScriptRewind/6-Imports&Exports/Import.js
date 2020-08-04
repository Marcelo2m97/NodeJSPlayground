import cpu from "./ObjectExport"

import { add as addFunction } from "./FunctionsExport"
import { sub, date } from "./FunctionsExport"

console.log(cpu);
console.log("----------");
console.log(addFunction(3,5));
console.log("----------");
console.log(sub(3,5));
console.log("----------");
console.log(date);