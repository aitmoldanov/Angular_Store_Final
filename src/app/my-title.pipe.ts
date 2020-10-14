import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'myTitle'
})
export class MyTitlePipe implements PipeTransform {
  transform(gameName: string, gameCode: string): string {
    if (gameCode.toLowerCase() == "aaa-1100" || gameCode.toLowerCase() == "aaa-0049")
      return "Long " + gameName;
    else
      return "Short " + gameName;
  }
}
