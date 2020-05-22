import { serve } from "./deps.ts";
import { getStringUntil1337, getTimeUntil1337 } from "./leet.helpers.ts";

const server = serve({ port: 8000 });
console.log("http://localhost:8000/");

for await (const request of server) {
  const headers = new Headers();
  headers.append("Content-Type", "text/html; charset=UTF-8");
  request.respond({
    headers,
    body: getStringUntil1337(getTimeUntil1337(new Date())),
  });
}
