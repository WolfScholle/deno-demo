import { Application } from "./deps.ts";
import { handleTimeUntil1337 } from "./leet.controller.ts";

const app = new Application();

app.use(handleTimeUntil1337);

app.listen("localhost:8000");
console.log("http://localhost:8000/");
