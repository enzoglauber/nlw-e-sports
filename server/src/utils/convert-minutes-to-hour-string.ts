
export function convertMinutesToHourString(amount: number) {
  const hours = String(Math.floor(amount / 60)).padStart(2, '0');
  const minutes = String(amount % 60).padStart(2, '0');

  return `${hours}:${minutes}`;
}