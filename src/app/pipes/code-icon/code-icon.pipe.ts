import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'codeIcon'
})
export class CodeIconPipe implements PipeTransform {


  transform(value: unknown, ...args: unknown[]): unknown {
    switch (value) {
      case 0:
        return './assets/images/sun.svg'


      case 1:
      case 2:
      case 3:
        return './assets/images/cloud.svg'

      case 45:
      case 48:
        return './assets/images/fog.svg'

      case 51:
      case 53:
      case 55:
      case 56:
      case 57:
        return './assets/images/light-rain.svg'

      case 61:
      case 63:
      case 65:
        return './assets/images/rain.svg'

      case 66:
      case 67:
        return './assets/images/rain.svg'

      case 71:
      case 73:
      case 75:
        return './assets/images/snow.svg'

      case 77:
        return './assets/images/snow.svg'

      case 80:
      case 81:
      case 82:
        return './assets/images/rain.svg'

      case 85:
      case 86:

        return './assets/images/snow.svg'

      case 95:
      case 96:
      case 99:
        return './assets/images/thunder.svg'



      default:
        return './assets/images/sun.svg'
    }
  }


}
