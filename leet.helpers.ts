export function getTimeUntil1337(timeToCheck: Date) {
  const next1337 = new Date();
  next1337.setHours(13, 37);

  if (next1337 < timeToCheck) {
    next1337.setDate(next1337.getDate() + 1);
  }

  const timeUntil1337 = new Date(next1337.getTime() - timeToCheck.getTime());
  return timeUntil1337;
}

export function getStringUntil1337(timeUntil1337: Date) {
  if (timeExpired(timeUntil1337)) {
    return "It is 1337! 🎉";
  } else {
    return `${timeUntil1337.getHours()} hours and ${timeUntil1337.getMinutes()} minutes to 1337!`;
  }
}

export function timeExpired(possible1337: Date): boolean {
  return possible1337.getHours() === 0 && possible1337.getMinutes() === 0;
}
