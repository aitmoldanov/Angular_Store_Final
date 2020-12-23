import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  arrayOfTasks = ['25 min run', 'Breakfast', '25 min reading a book', 'Study'];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(newTask){
    this.arrayOfTasks.push(newTask);

    console.log('LayoutComponent:OnChanges');
  }
  ngDoCheck(){
    console.log('LayoutComponent:DoCheck');
  }
}

