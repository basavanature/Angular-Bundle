import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
})
export class AgePipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    return new Date().getFullYear() - new Date(value).getFullYear();
  }
}
