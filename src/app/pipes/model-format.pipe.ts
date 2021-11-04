import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'modelFormat'
})
export class ModelFormatPipe implements PipeTransform {

  transform(modelos: string[], ...args: unknown[]): unknown {
    let fixedValue: string = "";

    if (modelos.length == 1) {
      fixedValue = modelos[0];
    }
    else if (modelos.length > 1) {
      fixedValue = `[${modelos[0]} - ${modelos.slice(-1)[0]}]`
    }

    return fixedValue;
  }

}
