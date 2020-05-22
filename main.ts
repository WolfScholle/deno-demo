import { Application } from "./deps.ts";
import { getStringUntil1337, getTimeUntil1337 } from "./leet.helpers.ts";

const app = new Application();

app.use((context) => {
  const headers = new Headers();
  headers.append("Content-Type", "text/html; charset=UTF-8");
  context.response.headers = headers;
  context.response.body = getStringUntil1337(getTimeUntil1337(new Date()));
});

app.listen("localhost:8000");
console.log("http://localhost:8000/");
