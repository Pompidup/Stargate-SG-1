import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WormHole4Component } from './worm-hole4.component';

describe('WormHole4Component', () => {
  let component: WormHole4Component;
  let fixture: ComponentFixture<WormHole4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WormHole4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WormHole4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
