const timeStringToMinutes = (timeString: string) => {
  const [hours, minutes] = timeString.split(':').map(Number);
  return hours * 60 + minutes;
};

const minutesToTimeString = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
};

// Function to generate one-hour slots from startTime to endTime
export const generateSlots = (
  room: unknown,
  date: string,
  startTime: string,
  endTime: string,
  isBooked: boolean,
) => {
  const startMinutes = timeStringToMinutes(startTime);
  const endMinutes = timeStringToMinutes(endTime);
  const slots = [];

  for (
    let currentStart = startMinutes;
    currentStart < endMinutes;
    currentStart += 60
  ) {
    const currentEnd = Math.min(currentStart + 60, endMinutes);
    slots.push({
      room,
      date,
      startTime: minutesToTimeString(currentStart),
      endTime: minutesToTimeString(currentEnd),
      isBooked: isBooked ? isBooked : false,
    });
  }
  return slots;
};
