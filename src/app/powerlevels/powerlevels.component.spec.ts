import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerlevelsComponent } from './powerlevels.component';

describe('PowerlevelsComponent', () => {
  let component: PowerlevelsComponent;
  let fixture: ComponentFixture<PowerlevelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerlevelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerlevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
