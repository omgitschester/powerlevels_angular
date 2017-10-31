import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperSaiyanComponent3Component } from './super-saiyan-component3.component';

describe('SuperSaiyanComponent3Component', () => {
  let component: SuperSaiyanComponent3Component;
  let fixture: ComponentFixture<SuperSaiyanComponent3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperSaiyanComponent3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperSaiyanComponent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
