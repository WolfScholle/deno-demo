import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import {
  getTimeUntil1337,
  getStringUntil1337,
  timeExpired,
} from "./leet.helpers.ts";

Deno.test("isExpired returns true at 00:00 oclock", () => {
  const todayZeroOclock = new Date();
  todayZeroOclock.setHours(0, 0);

  const isExpired = timeExpired(todayZeroOclock);

  assertEquals(isExpired, true);
});

Deno.test("isExpired returns false when 00:01 oclock", () => {
  const todayNotZeroOclock = new Date();
  todayNotZeroOclock.setHours(0, 1);

  const isExpired = timeExpired(todayNotZeroOclock);

  assertEquals(isExpired, false);
});

Deno.test("getTimeUntil1337 return 00:00 when provided 13:37", () => {
  const today1337 = new Date();
  today1337.setHours(13, 37);
  const zeroMinutes = new Date(0);

  const timeTo1337 = getTimeUntil1337(today1337);

  assertEquals(timeTo1337.getHours(), zeroMinutes.getHours());
  assertEquals(timeTo1337.getMinutes(), zeroMinutes.getMinutes());
});

Deno.test("getTimeUntil1337 return 00:01 when provided 13:36", () => {
  const today1337 = new Date();
  today1337.setHours(13, 36);
  const zeroMinutes = new Date(60 * 1000);

  const timeTo1337 = getTimeUntil1337(today1337);

  assertEquals(timeTo1337.getHours(), zeroMinutes.getHours());
  assertEquals(timeTo1337.getMinutes(), zeroMinutes.getMinutes());
});

Deno.test("getStringUntil1337 prints 1337 for 13:37 oclock", () => {
  const today1337 = new Date();
  today1337.setHours(0, 0);
  const stringTo1337 = getStringUntil1337(today1337);

  assertEquals(stringTo1337, "It is 1337! 🎉");
});

Deno.test("getStringUntil1337 prints for time until 1337 for 13:36", () => {
  const today1337 = new Date();
  today1337.setHours(0, 1);

  const stringTo1337 = getStringUntil1337(today1337);

  assertEquals(stringTo1337, "0 hours and 1 minutes to 1337!");
});
