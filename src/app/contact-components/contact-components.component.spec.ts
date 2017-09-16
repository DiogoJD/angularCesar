import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponentsComponent } from './contact-components.component';

describe('ContactComponentsComponent', () => {
  let component: ContactComponentsComponent;
  let fixture: ComponentFixture<ContactComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
