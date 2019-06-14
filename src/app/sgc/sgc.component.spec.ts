import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SGCComponent } from './sgc.component';

describe('SGCComponent', () => {
  let component: SGCComponent;
  let fixture: ComponentFixture<SGCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SGCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SGCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
