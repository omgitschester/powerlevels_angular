import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperSaiyanComponent4Component } from './super-saiyan-component4.component';

describe('SuperSaiyanComponent4Component', () => {
  let component: SuperSaiyanComponent4Component;
  let fixture: ComponentFixture<SuperSaiyanComponent4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperSaiyanComponent4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperSaiyanComponent4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
