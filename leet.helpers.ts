import { intervalToDuration } from "./deps.ts";
import { Duration } from "./leet.models.ts";

export function getTimeUntil1337(timeToCheck: Date): Duration {
  const next1337 = new Date();
  next1337.setHours(13, 37);

  if (next1337 < timeToCheck) {
    next1337.setDate(next1337.getDate() + 1);
  }

  const timeUntil1337 = intervalToDuration({
    start: timeToCheck,
    end: next1337,
  });
  return timeUntil1337;
}

export function getStringUntil1337(timeUntil1337: Duration) {
  if (timeExpired(timeUntil1337)) {
    return "It is 1337! 🎉";
  } else {
    return `${timeUntil1337.hours} hours and ${timeUntil1337.minutes} minutes to 1337!`;
  }
}

export function timeExpired(possible1337: Duration): boolean {
  return possible1337.hours === 0 && possible1337.minutes === 0;
}
