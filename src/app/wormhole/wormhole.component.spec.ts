import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WormholeComponent } from './wormhole.component';

describe('WormholeComponent', () => {
  let component: WormholeComponent;
  let fixture: ComponentFixture<WormholeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WormholeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WormholeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
