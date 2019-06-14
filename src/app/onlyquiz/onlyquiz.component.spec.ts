import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyquizComponent } from './onlyquiz.component';

describe('OnlyquizComponent', () => {
  let component: OnlyquizComponent;
  let fixture: ComponentFixture<OnlyquizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlyquizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlyquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

