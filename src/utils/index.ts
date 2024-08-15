export const formatDate = (dateInput: Date | string) => {
  const date = new Date(dateInput); // Convert input to Date object

  // Options for time and date formatting
  const optionsTime: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  const optionsDate: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };

  // Format the time in local time zone
  const time = date.toLocaleTimeString("en-US", optionsTime);

  // Format the date in local time zone
  const formattedDate = date.toLocaleDateString("en-US", optionsDate);

  return `${time} | ${formattedDate}`;
};
