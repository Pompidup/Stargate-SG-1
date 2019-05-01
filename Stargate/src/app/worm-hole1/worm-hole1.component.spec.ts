import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WormHole1Component } from './worm-hole1.component';

describe('WormHole1Component', () => {
  let component: WormHole1Component;
  let fixture: ComponentFixture<WormHole1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WormHole1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WormHole1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
