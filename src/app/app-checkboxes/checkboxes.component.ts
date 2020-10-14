import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-checkboxes',
  templateUrl: './app-checkboxes.component.html',
  styleUrls: ['./app-checkboxes.component.css']
})
export class CheckboxesComponent implements OnInit {

  @Input() task;

  constructor() { }

  ngOnInit(): void {
  }

}
