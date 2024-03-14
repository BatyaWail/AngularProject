import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatTime',
  standalone: true
})
export class FormatTimePipe implements PipeTransform {
  transform(value: number, args?: any): string {
    if (!isNaN(value) && value >= 0) {
      const hours = Math.floor(value / 60);
      const minutes = value % 60;
      return hours > 0 ? `${hours} hour${hours > 1 ? 's' : ''} ${minutes} minutes` : `${minutes} minutes`;
    } else {
      return 'Invalid time';
    }
  }
}
