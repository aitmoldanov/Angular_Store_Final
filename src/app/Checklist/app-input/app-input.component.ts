import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-app-input',
  templateUrl: './app-input.component.html',
  styleUrls: ['./app-input.component.css']
})
export class AppInputComponent implements OnInit {

  task: any;
  @Output() addTask: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(task){
    this.addTask.emit(task);
    console.log('AppInputComponent:OnChanges');
  }
  // addTask(task: string){this.addtask.}


}
