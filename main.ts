import { serve } from "./deps.ts";
import { getStringUntil1337, getTimeUntil1337 } from "./leet.helpers.ts";

const server = serve({ port: 8000 });
console.log("http://localhost:8000/");

for await (const request of server) {
  request.respond({ body: getStringUntil1337(getTimeUntil1337(new Date())) });
}
