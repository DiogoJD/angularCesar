import { Injectable } from '@angular/core';
import { Contact } from './contact.model';
import { Http } from '@angular/Http';

@Injectable()
export class ContactsService {

  constructor() { }

  getContacts() {
    return this.contacts;
  }
  contacts:Contact[] = [
    {

      name: "Diogo",
      phone: "888888"

    },
    {

      name: "Leo",
      phone: "777777"

    },
    {
      
      name: "Homao",
      phone: "666"

    }

]

}

