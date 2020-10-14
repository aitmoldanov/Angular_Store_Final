import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-booking-ticket',
  templateUrl: './booking-ticket.component.html',
  styleUrls: ['./booking-ticket.component.css']
})
export class BookingTicketComponent implements OnInit {

  dynamicForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.dynamicForm = this.formBuilder.group({
      numberOfTickets: ['', Validators.required],
      tickets: new FormArray([])
    });
    console.log('ChildComponent:OnInit');
  }

  // convenience getters for easy access to form fields
  get f() { return this.dynamicForm.controls; }
  get t() { return this.f.tickets as FormArray; }

  ngOnChanges(e) {
    const numberOfTickets = e.target.value || 0;
    if (this.t.length < numberOfTickets) {
      for (let i = this.t.length; i < numberOfTickets; i++) {
        this.t.push(this.formBuilder.group({
          name: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]]
        }));
      }
    } else {
      for (let i = this.t.length; i >= numberOfTickets; i--) {
        this.t.removeAt(i);
      }
    }console.log('BookingTicketComponent:OnChanges');
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.dynamicForm.invalid) {
      return;

      console.log('BookingTicketComponent:DoCheck');
      console.log('BookingTicketComponent:OnChanges');
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.dynamicForm.value, null, 4));
  }
  ngOnAfterContentInit(){
    console.log('BookingTicketComponent: AfterContentInit');
    console.log('BookingTicketComponent: ngAfterContentChecked()');
    console.log('BookingTicketComponent: ngAfterViewInit()');
    console.log('BookingTicketComponent: ngAfterViewChecked()');
  }

  ngOnDestroy() {
    // reset whole form back to initial state
    this.submitted = false;
    this.dynamicForm.reset();
    this.t.clear();
    console.log('BookingTicketComponent:OnDestroy');
  }

  onClear() {
    this.submitted = false;
    this.t.reset();
  }
}
