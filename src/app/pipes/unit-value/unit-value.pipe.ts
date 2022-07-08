import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unitValue'
})
export class UnitValuePipe implements PipeTransform {

  transform(value: number, ...args: string[]): string {
    let unit = ''
    if(args.length>0){
      unit = ' ' + args[0];
      
    }
    const decimalValue = value.toFixed(2);

    // return value.toFixed(2) + ' ' + (args.length > 0? args [0] : '');

    return decimalValue + unit
  }

  

}
