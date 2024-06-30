interface TimestampProps {
  timestamp: string; // Assuming timestamp is provided as an ISO 8601 string
}

const TimestampDisplay = (timestamp: string): string => {
  const date = new Date(timestamp);
  const now = new Date();

  // Calculate the difference in milliseconds
  const diffMs = now.getTime() - date.getTime();

  // Calculate the difference in days
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  // If the timestamp is today, show time like "2:51 am/pm"
  if (
    date.getDate() === now.getDate() &&
    date.getMonth() === now.getMonth() &&
    date.getFullYear() === now.getFullYear()
  ) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  }

  // If the timestamp is within the same week, show day like "Sun", "Mon", etc.
  if (
    date.getFullYear() === now.getFullYear() &&
    date.getMonth() === now.getMonth() &&
    diffDays <= now.getDay()
  ) {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[date.getDay()];
  }

  // If the timestamp is in the same year, show date like "Jun 16"
  if (date.getFullYear() === now.getFullYear()) {
    return date.toLocaleString("default", { month: "short", day: "numeric" });
  }

  // If the timestamp is in the previous year, show date like "Nov 16, 2023"
  return date.toLocaleString("default", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

export default TimestampDisplay

// Example usage:
// const timestamp = "2024-06-26T12:00:00Z";
// console.log(formatTimestamp(timestamp)); // Example output: "2:51 pm" or "Sun" or "Jun 16" or "Nov 16, 2023"
