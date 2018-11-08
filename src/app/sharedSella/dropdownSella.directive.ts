import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdownSella]'
})
export class DropdownSellaDirective {

  @HostBinding('class.open') isOpen=false;

  @HostListener('click') toggleOpen()
  {
    this.isOpen=!this.isOpen;
  }

  //constructor() { }

}
