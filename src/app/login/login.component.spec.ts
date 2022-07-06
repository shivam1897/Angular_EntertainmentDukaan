import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let fakeService : Router
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent, Router ],
      providers: [
        { provide: Router, useValue: fakeService }
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    //fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
