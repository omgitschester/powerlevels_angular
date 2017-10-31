import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperSaiyanComponent2Component } from './super-saiyan-component2.component';

describe('SuperSaiyanComponent2Component', () => {
  let component: SuperSaiyanComponent2Component;
  let fixture: ComponentFixture<SuperSaiyanComponent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperSaiyanComponent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperSaiyanComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
