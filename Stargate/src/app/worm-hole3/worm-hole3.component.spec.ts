import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WormHole3Component } from './worm-hole3.component';

describe('WormHole3Component', () => {
  let component: WormHole3Component;
  let fixture: ComponentFixture<WormHole3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WormHole3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WormHole3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
