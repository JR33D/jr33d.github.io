import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jr-nav-selection',
  templateUrl: './nav-selection.component.html',
  styleUrls: ['./nav-selection.component.scss']
})
export class NavSelectionComponent implements OnInit {
  areas: Array<string> = [
    'About',
    'Contact',
    'Projects',
    'Skills',
    'History'
  ];

  constructor() { }

  ngOnInit() {
  }

}
