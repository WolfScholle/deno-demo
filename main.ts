import { serve } from "./deps.ts";
import { getStringUntil1337, getTimeUntil1337 } from "./leet.helpers.ts";

const s = serve({ port: 8000 });
console.log("http://localhost:8000/");

for await (const req of s) {
  req.respond({ body: getStringUntil1337(getTimeUntil1337(new Date())) });
}
