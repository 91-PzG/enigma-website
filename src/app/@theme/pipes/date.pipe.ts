import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "localDate" })
export class LocalDatePipe implements PipeTransform {
  transform(input: string): string {
    return new Date(input).toLocaleString("de-de", {
      weekday: "short",
      month: "numeric",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
  }
}
