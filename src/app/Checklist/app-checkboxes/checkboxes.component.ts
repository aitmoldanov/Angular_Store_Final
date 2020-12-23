import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../../shared/services/data.service';


@Component({
  selector: 'app-checkboxes',
  templateUrl: './app-checkboxes.component.html',
  styleUrls: ['./app-checkboxes.component.css']
})
export class CheckboxesComponent implements OnInit {
  task;
  constructor(private dataService: DataService){}
  ngOnInit(): void {
    this.task = this.dataService.getData();
  }

}
