import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-components',
  templateUrl: './contact-components.component.html',
  styleUrls: ['./contact-components.component.css']
})

export class ContactComponentsComponent implements OnInit {

  @Input() contact = {
    name: "",
    phone: ""
  }


  @Output() contactDeleted = new EventEmitter();

  remove() {
    //alert(`Remover ${this.contact.name}`);
    this.contactDeleted.emit();
  }


  constructor() { }

  ngOnInit() {
  }

}