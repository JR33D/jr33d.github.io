import { Component, Input } from '@angular/core';

@Component({
  selector: 'jr-nav-option',
  templateUrl: './nav-option.component.html',
  styleUrls: ['./nav-option.component.scss']
})
export class NavOptionComponent {
  @Input() public title: string;
  @Input() public index: string;
  public content: string = this.title;

  constructor() { }

}
