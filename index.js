//Converting date format from UTC to MM-YYYY.
function formatDateMMYYYY(inputDateString, outputFormat = "dd-MM-yyyy") {
  const originalDateString = inputDateString;
  const originalDate = new Date(originalDateString);

  if (isNaN(originalDate.getTime())) {
    return "Invalid Date";
  }
  // Check if the date is within a reasonable range
  if (originalDate.getFullYear() < 1000 || originalDate.getFullYear() > 9999) {
    return "Out of Range";
  }

  const monthYearFormat = new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  });
  const formattedDate = monthYearFormat.format(originalDate);
  return formattedDate;
}

module.exports = formatDateMMYYYY;
