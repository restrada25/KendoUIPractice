import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateInputPanelComponent } from './date-input-panel.component';

describe('DateInputPanelComponent', () => {
  let component: DateInputPanelComponent;
  let fixture: ComponentFixture<DateInputPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateInputPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateInputPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
