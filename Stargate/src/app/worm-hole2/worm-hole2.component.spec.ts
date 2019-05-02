import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WormHole2Component } from './worm-hole2.component';

describe('WormHole2Component', () => {
  let component: WormHole2Component;
  let fixture: ComponentFixture<WormHole2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WormHole2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WormHole2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
