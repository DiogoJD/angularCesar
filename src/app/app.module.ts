import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { FormsModule } from '@angular/forms';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactComponentsComponent } from './contact-components/contact-components.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactsService } from './contacts/contacts.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactsComponent,
    ContactComponentsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot ([
      {
      path: '',
      component: ContactsComponent
      },
      {
        path: 'about',
        component: AboutComponent
      }
    ]),
    HttpModule
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
