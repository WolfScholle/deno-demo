import { getStringUntil1337, getTimeUntil1337 } from "./leet.helpers.ts";
import { Context } from "./deps.ts";

export function handleTimeUntil1337(context: Context) {
  const headers = new Headers();
  headers.append("Content-Type", "text/html; charset=UTF-8");
  context.response.headers = headers;
  context.response.body = getStringUntil1337(getTimeUntil1337(new Date()));
}
