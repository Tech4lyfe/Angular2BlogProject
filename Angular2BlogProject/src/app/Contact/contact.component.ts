import { Component } from '@angular/core';
import { Contact } from '../Models/contacts.model';
import { NgForm } from '@angular/forms';


@Component({
    templateUrl: 'app/Contact/contact.html'
})

export class ContactComponent {

    model = new Contact("","","");
   
   submit(form: NgForm) {
       alert("Message has been sent successfully");
       form.resetForm();
   }

    
}