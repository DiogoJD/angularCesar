import { Component, OnInit } from '@angular/core';
import { Contact } from './contact.model';
import { ContactsService } from './contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

export class ContactsComponent implements OnInit {


  constructor(private contactsService:ContactsService) { 

  }

  ngOnInit() {
    this.contacts = this.contactsService.getContacts();
  }

  contacts:Contact[];
  
  delete(contact){
    this.contacts.splice(this.contacts.indexOf(contact), 1)

    
  }

  inputName = "";
  inputPhone = "";

  insertContatos(){
    let contato:Contact = {
      name: this.inputName,
      phone: this.inputPhone
    }

    this.contacts.push(contato);
    this.clearForm();

  }

  clearForm() {
    this.inputName = "";
    this.inputPhone = "";
  }

}

