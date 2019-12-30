import { Directive } from '@angular/core';


@Directive({
  selector: 'input[appCustom]',
  host: {
    '(input)': 'onInput($event)',

  }
})



export class CustomDirective {

  constructor() { }
  
  onInput(event){
    console.log(event.target.value)
  }

}
