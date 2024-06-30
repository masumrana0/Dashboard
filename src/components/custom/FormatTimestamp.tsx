export default function formatTimestamp(timestamp: string): string {
  const daysOfWeek: string[] = [
    "SUN",
    "MON",
    "TUE",
    "WED",
    "THU",
    "FRI",
    "SAT",
  ];
  const months: string[] = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  const date: Date = new Date(timestamp);
  const now: Date = new Date();

  const sameDay: boolean = date.toDateString() === now.toDateString();
  const sameWeek: boolean =
    now.getTime() - date.getTime() < 7 * 24 * 60 * 60 * 1000 &&
    now.getDay() >= date.getDay();
  const sameYear: boolean = date.getFullYear() === now.getFullYear();

  let hours: number = date.getHours();
  const minutes: string = date.getMinutes().toString().padStart(2, "0");
  const ampm: string = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  if (sameDay) {
    return `${hours}:${minutes} ${ampm}`;
  } else if (sameWeek) {
    const dayOfWeek: string = daysOfWeek[date.getDay()];
    return `${dayOfWeek} AT ${hours}:${minutes} ${ampm}`;
  } else if (sameYear) {
    const month: string = months[date.getMonth()];
    const day: number = date.getDate();
    return `${month} ${day} AT ${hours}:${minutes} ${ampm}`;
  } else {
    const year: number = date.getFullYear();
    const month: string = months[date.getMonth()];
    const day: number = date.getDate();
    return `${month} ${day}, ${year} AT ${hours}:${minutes} ${ampm}`;
  }
}
