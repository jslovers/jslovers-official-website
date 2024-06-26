export function generateUnderlineSVGs(widths: number[], heights: number[]) {
  const svgs = [];

  for (let i = 0; i < widths.length; i++) {
    const width = widths[i];
    const height = heights[i];

    const svg = (
      <svg
        key={i}
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1.5"
          y="1.5"
          width={width - 3}
          height={height - 3}
          rx="2.5"
          fill="white"
          stroke="#505050"
          strokeWidth="3"
        />
      </svg>
    );

    svgs.push(svg);
  }

  return svgs;
}

export function convertDateTimeForMeetupDetail(dateTimeStr: string) {
  const dateTime = new Date(dateTimeStr);

  const optionsDate: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long' };
  const formattedDate = dateTime.toLocaleDateString('en-US', optionsDate);
  const [month, day] = formattedDate.split(' ');
  const dateOrdinal = getOrdinal(dateTime.getDate());

  const timezoneAbbr = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const formattedStartTimeLocal = dateTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: timezoneAbbr });

  const formattedDateTime = `On ${dateOrdinal} ${month} at ${formattedStartTimeLocal} ${timezoneAbbr}`;
  return formattedDateTime;  // Sample Output: On 21st October at 01:00 AM IST
}

// Helper function to get ordinal suffix for date
function getOrdinal(n: number) {
  const suffixes = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
}
