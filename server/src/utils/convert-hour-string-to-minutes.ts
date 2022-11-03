
export function convertHourStringToMinutes(hour: string) {
  const [hours, minutes] = hour.split(':').map(Number);
  const amount = (hours * 60) + minutes;

  return amount;
}