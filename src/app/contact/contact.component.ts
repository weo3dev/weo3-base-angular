import { Component, OnInit, HostBinding } from '@angular/core';
import { AppService, IMessage } from '../shared/services/connect.service';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Client } from '../client';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  providers: [AppService]
})
export class ContactComponent implements OnInit {

  client: FormGroup;
  clientSubmitted: boolean;

  constructor(public _connectService: AppService, public _fb: FormBuilder) { }

  ngOnInit() {
    this.clientSubmitted = false;
    this.client = this._fb.group({
      fullname: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', Validators.required],
      website: [''],
      pcategory: ['', Validators.required],
      pstatus: ['', Validators.required],
      purpose: ['', Validators.required],
      goal: ['', Validators.required],
      notes: ['']
    });

  }

  connectMe() {
    this.clientSubmitted = true;
    this._connectService.sendEmail(this.client.value).subscribe(
      response => this.handleResponse(response),
      error => this.handleResponse(error)
    );
  }

  handleResponse(response) {
    console.log(`response status: ${response.status}`);

    if(response.status == 'success') {
      console.log('success');
    }

    if(response.status == 'error'){
      console.log('error');
    }
  }


}
