import { Component } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contactMethods = [
    {
      value: 1, name: 'Email'
    },
    {
      value: 2, name: 'Phone'
    }
  ]

  log(firstname) {
    console.log(firstname)
  }

  submit(form) {
    console.log(form);

    if (form.valid) {
      console.log('This form is valid');
      // Calling HTTP request
    }
  }
}
