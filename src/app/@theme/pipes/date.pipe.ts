import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "localDate" })
export class LocalDatePipe implements PipeTransform {
  transform(input: Date | string): string {
    return new Date(input).toLocaleString("de-de", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });
  }
}
