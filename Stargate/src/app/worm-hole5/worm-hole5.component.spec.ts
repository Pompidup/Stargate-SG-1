import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WormHole5Component } from './worm-hole5.component';

describe('WormHole5Component', () => {
  let component: WormHole5Component;
  let fixture: ComponentFixture<WormHole5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WormHole5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WormHole5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
