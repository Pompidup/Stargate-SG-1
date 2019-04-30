import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalquizComponent } from './finalquiz.component';

describe('FinalquizComponent', () => {
  let component: FinalquizComponent;
  let fixture: ComponentFixture<FinalquizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalquizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
