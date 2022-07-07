import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'codeIcon'
})
export class CodeIconPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    switch (value) {
      case 0:
        return './ass/'

      case 1:
      case 2:
      case 3: 
        return './light-r'

      

  
    
      default:
        break;
    }
  }

}
