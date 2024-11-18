export default class DateFormatter {
  static formated(data: Date): string {
    const pad = (n: number) => n.toString().padStart(2, "0");

    const d = data ?? new Date();
    const year = d.getFullYear();
    const mounth = pad(d.getMonth() + 1);
    const day = pad(d.getDate());
    const hour = pad(d.getHours());
    const minute = pad(d.getMinutes());

    return `${year}-${mounth}-${day}-${hour}:${minute}`;
  }

  static parse(data: string): Date {
    const [year, mounth, day] = data.split("T")[0].split("-");
    const [hour, minute] = data.split("T")[1].split(":");

    return new Date(
      parseInt(year),
      parseInt(mounth) - 1,
      parseInt(day),
      parseInt(hour),
      parseInt(minute)
    );
  }
}

console.log(DateFormatter.parse("2024-11-12T13:27"));
